Ext.define("Clutch.view.torrent.TorrentsGrid", {
    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',

    requires : ['Clutch.view.torrent.TorrentContextMenu', 'Clutch.view.column.StatusColumn', 'Clutch.view.column.EtaColumn', 'Clutch.view.column.TorrentProgressColumn', 'Clutch.view.column.SpeedColumn'],

    store : 'TorrentTransfers',

    emptyTextPrefix : 'No torrents to show',

    config : {
        torrents : null,
        filterFn : function() {
            return true;
        }
    },

    viewConfig : {
        preserveScrollOnRefresh : true, //TODO - doesn't quite work how desired when there are many torrents in the grid
        stripeRows : true
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
        header : 'Seeds',
        width : 50,
        dataIndex : 'seedsConnected'
    }, {
        header : 'Peers',
        width : 50,
        dataIndex : 'peersConnected'
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
        
        this.store.loadData(newValue);
        return newValue;
    },

    getSelectedTorrentIds : function() {
        var torrentIds = [], selections = this.getSelectionModel().getSelection();

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });
        return torrentIds;
    },
    getAllTorrentIds : function() {

        var torrentIds = [], torrents = this.getTorrents();

        Ext.each(torrents, function(torrent) {
            torrentIds.push(torrent.id);
        });
        return torrentIds;
    },
    getFinishedTorrentIds : function() {

        var torrentIds = [], torrents = this.getTorrents();

        Ext.each(torrents, function(torrent) {
            if (torrent.status === 5 || torrent.status === 6) {
                torrentIds.push(torrent.id);
            }
        });
        return torrentIds;
    }
});
