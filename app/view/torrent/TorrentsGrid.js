Ext.define("Clutch.view.torrent.TorrentsGrid", {
    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',

    requires : ['Clutch.view.torrent.TorrentContextMenu', 'Clutch.view.column.StatusColumn', 'Clutch.view.column.EtaColumn', 'Clutch.view.column.TorrentProgressColumn', 'Clutch.view.column.SpeedColumn'],

    store : 'TorrentTransfers',

    config : {
        torrents : null,
        filter : 'all'
    },

    viewConfig : {
        preserveScrollOnRefresh : true, //TODO - doesn't quite work how desired when there are many torrents in the grid
        emptyText: 'No torrents to show',
        deferEmptyText: false
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
        header : 'Upload Speed',
        width : 120,
        dataIndex : 'rateUpload',
        xtype : 'speedcolumn'

    }, {
        header : 'Download Speed',
        dataIndex : 'rateDownload',
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
    applyFilter : function(f, oldValue) {

        var currentData = this.getTorrents();
        var filteredData = this.filterIndividualTorrents(currentData);
        this.store.loadData(filteredData);
        return f;
    },

    applyTorrents : function(newValue, oldValue) {
        //newValue is data from the transmission-daemon and is unfiltered
        //filter the data here against this.getFilter() before loading the data into the store
        var filter = this.getFilter(), filteredData = [];
        switch (filter) {
            case 'all':
                filteredData = newValue;
                break;
            default:
                //a filter other than 'all' is set
                filteredData = this.filterIndividualTorrents(newValue);
        }

        this.store.loadData(filteredData);
        return newValue;
    },
    filterIndividualTorrents : function(unfilteredData) {
        var data = [], f = this.getFilter();

        Ext.each(unfilteredData, function(torrent) {
            switch (f) {
                case 'downloading':
                    if (torrent.status === 3 || torrent.status === 4) {
                        data.push(torrent);
                    }
                    break;
                case 'completed':
                    if (torrent.status > 4) {
                        data.push(torrent);
                    }
                    break;
                case 'paused':
                    if (torrent.status < 3) {
                        data.push(torrent);
                    }
                    break;
            }
        });
        return data;
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
