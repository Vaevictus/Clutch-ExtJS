Ext.define("Clutch.view.TorrentsGrid", {
    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',

    requires : ['Clutch.view.TorrentContextMenu', 'Clutch.view.column.StatusColumn', 'Clutch.view.column.TorrentProgressColumn','Clutch.view.column.SpeedColumn'],

    store : 'TorrentTransfers',

    config : {
        torrents : null,
        filter : 'all'
    },

    contextMenu : Ext.create('Clutch.view.TorrentContextMenu', {}),

    viewConfig : {
        preserveScrollOnRefresh : true //doesn't quite work how desired
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
        flex : 1,
        dataIndex : 'rateDownload',
        xtype : 'speedcolumn'
    }],
    selModel : new Ext.selection.RowModel({
        mode : 'MULTI'
    }),

    applyTorrents : function(newValue, oldValue) {
        //newValue is data from the transmission-daemon and is unfiltered
        //filter the data here against this.getFilter() before loading the data into the store
        var filter = this.getFilter(), filteredData = [];
        switch (filter) {
            case 'all':
                filteredData = newValue;
                break;
        }
        this.store.loadData(filteredData);
    }
});
