Ext.define('Clutch.view.torrent.TorrentsGrid', {

    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',
    
    requires : ['Clutch.view.column.StatusColumn', 'Clutch.view.column.EtaColumn', 'Clutch.view.column.TorrentProgressColumn', 'Clutch.view.column.SpeedColumn'],

    inject : ['rpcService', 'contextMenu'],

    region : 'center',

    config : {
        torrents : null,

        filterFn : function() {
            return true;
        },

        rpcService : null,
        
        contextMenu : null
    },

    viewConfig : {
        preserveScrollOnRefresh : true, //TODO - doesn't quite work how desired when there are many torrents in the grid
        stripeRows : true,
        emptyText : 'No torrents to show'
    },

    columns : [{
        header : 'File',
        flex : 1,
        dataIndex : 'name'
    }, {
        header : 'Status',
        xtype : 'torrentstatuscolumn',
        dataIndex : 'status'
    }, {
        header : 'Progress',
        dataIndex : 'percentDone',
        xtype : 'torrentprogresscolumn',
        width : 110
    }, {
        xtype : 'templatecolumn',
        header : 'Seeds',
        width : 55,
        tpl : '{realSeedsSendingToUs} ({realSeeds})'
    }, {
        header : 'Peers',
        width : 55,
        xtype : 'templatecolumn',
        tpl : '{realPeersSendingToUs} ({realPeers})'
    }, {
        header : 'Download Speed',
        dataIndex : 'rateDownload',
        xtype : 'speedcolumn'
    }, {
        header : 'Upload Speed',
        width : 120,
        dataIndex : 'rateUpload',
        xtype : 'speedcolumn'

    }, {
        header : 'ETA',
        flex : 1,
        dataIndex : 'eta',
        xtype : 'etacolumn'
    }],
    selModel : new Ext.selection.RowModel({
        mode : 'MULTI'
    }),

    initComponent : function(cfg) {

        // this.contextMenu = Ext.create('Clutch.view.torrent.TorrentContextMenu', {
            // grid : this
        // });

        this.store = Ext.create('Clutch.store.TorrentTransfers');

        this.callParent(arguments);
        //this has to go here not at the beginning or you will have "buffered of undefined errors"

    },
    applyFilterFn : function(fn, oldValue) {
        //clear existing filters
        this.store.clearFilter(true);
        this.store.filter(fn);
        return fn;
    },

    applyTorrents : function(newValue, oldValue) {

        this.store.loadData(newValue);
        return newValue;
    },

    getSelectedTorrentIds : function() {

        var selectedTorrentIds = [], selections = this.getSelectionModel().getSelection();

        Ext.each(selections, function(s) {

            var id = s.get('id');

            selectedTorrentIds.push(id);

        }, this);

        return selectedTorrentIds;
    },
    getSelectedTorrents : function() {
        var selectedTorrents = [], selections = this.getSelectionModel().getSelection();

        Ext.each(selections, function(s) {
            var torrent = this.getTorrentById(s.get('id'));
            if (torrent) {
                selectedTorrents.push(torrent);
            }
        }, this);

        return selectedTorrents;
    },

    getFinishedTorrents : function() {

        var finishedTorrents = [], allTorrents = this.getTorrents();

        Ext.each(allTorrents, function(t) {
            if (t.status === 5 || t.status === 6) {
                finishedTorrents.push(t);
            }
        }, this);

        return finishedTorrents;
    },

    removeAllTorrents : function() {

        var allTorrents = this.getTorrents();

        if (allTorrents.length < 1) {
            return;
        }
        this.promptRemoveTorrents(allTorrents);
    },
    removeFinishedTorrents : function() {

        var finishedTorrents = this.getFinishedTorrents();

        if (finishedTorrents.length < 1) {
            return;
        }
        this.promptRemoveTorrents(finishedTorrents);
    },
    removeSelectedTorrents : function() {

        var torrents = this.getSelectedTorrents();

        if (torrents.length < 1) {
            return;
        }
        this.promptRemoveTorrents(torrents);
    },

    promptRemoveTorrents : function(torrents) {

        var msg = '';
        var torrentIds = [];
        Ext.each(torrents, function(t) {
            msg += (t.name + '<br>');
            torrentIds.push(t.id);
        });

        msg += '<b>Do you also want to delete the torrent data? This can not be undone.</b>';

        Ext.MessageBox.show({
            title : 'Confirm remove torrents?',
            msg : msg,
            buttons : Ext.MessageBox.YESNOCANCEL,
            fn : function(answer) {
                if (answer === 'cancel') {
                    return;
                }
                var trash = (answer === 'yes')

                this.getRpcService().removeTorrents(torrentIds, trash);

            },
            scope : this,
            animateTarget : 'mb4',
            icon : Ext.MessageBox.QUESTION
        });
    },
    pauseAllTorrents : function() {

        this.getRpcService().pauseTorrents(this.getAllTorrentIds());
    },

    pauseSelectedTorrents : function() {

        var torrentIds = this.getSelectedTorrentIds();

        if (torrentIds.length < 1) {
            return;
        }
        this.getRpcService().pauseTorrents(torrentIds);

    },

    startSelectedTorrents : function() {

        var torrentIds = this.getSelectedTorrentIds();

        if (torrentIds.length < 1) {
            return;
        }

        this.getRpcService().startTorrents(torrentIds);
    },
    startAllTorrents : function() {

        var torrentIds = this.getAllTorrentIds();

        this.getRpcService().startTorrents(torrentIds);
    },

    getAllTorrentIds : function() {

        var allTorrents = this.getTorrents();
        var ids = [];
        Ext.each(allTorrents, function(t) {
            ids.push(t.id);
        });
        
        return ids;
    },

    getTorrentById : function(id) {

        var torrents = this.getTorrents(), desiredTorrent;

        Ext.each(torrents, function(t) {
            if (t.id === id) {
                desiredTorrent = t;
                return true;
            }
        }, this);
        return desiredTorrent;
    }
});
