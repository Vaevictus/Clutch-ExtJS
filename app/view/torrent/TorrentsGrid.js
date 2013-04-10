Ext.define('Clutch.view.torrent.TorrentsGrid', {
    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',

    requires : ['Clutch.view.torrent.TorrentContextMenu', 'Clutch.view.column.StatusColumn', 'Clutch.view.column.EtaColumn', 'Clutch.view.column.TorrentProgressColumn', 'Clutch.view.column.SpeedColumn'],

    store : 'TorrentTransfers',

    config : {
        torrents : null,

        filterFn : function() {
            return true;
        }
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
        this.contextMenu = Ext.create('Clutch.view.torrent.TorrentContextMenu', {
            grid : this
        });

        this.callParent(arguments);
    },
    applyFilterFn : function(fn, oldValue) {
        //clear existing filters
        this.store.clearFilter(true);
        this.store.filter(fn);
        return fn;
    },

    applyTorrents : function(newValue, oldValue) {

        this.store.loadRawData(newValue);
        return newValue;
    },

    getSelectedTorrents : function() {
        var selectedTorrents = [], selections = this.getSelectionModel().getSelection(), allTorrents = this.getTorrents();

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

        Ext.each(torrents, function(t) {
            msg += (t.name + '<br>');
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

                Clutch.util.RPC.removeTorrents(torrents, trash);

            },
            animateTarget : 'mb4',
            icon : Ext.MessageBox.QUESTION
        });
    },
    pauseAllTorrents : function() {
        var torrents = this.getTorrents();

        if (torrents.length < 1) {
            return;
        }

        Clutch.util.RPC.pauseTorrents(this.getTorrents());
    },

    pauseSelectedTorrents : function() {

        var torrents = this.getSelectedTorrents();
         
         if (torrents.length < 1) {
            return;
        }
        Clutch.util.RPC.pauseTorrents(torrents);

    },

    startSelectedTorrents : function() {

        var torrents = this.getSelectedTorrents();

        if (torrents.length < 1) {
            return;
        }

        Clutch.util.RPC.startTorrents(torrents);
    },
    startAllTorrents : function() {

        var torrents = this.getTorrents();

        Clutch.util.RPC.startTorrents(torrents);
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
