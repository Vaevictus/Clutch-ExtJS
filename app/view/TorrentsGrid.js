Ext.define("Clutch.view.TorrentsGrid", {
    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',

    requires: ['Clutch.view.TorrentContextMenu'],
    
    store : 'TorrentTransfers',

    config : {
        torrents : null
    },
    
    contextMenu: Ext.create('Clutch.view.TorrentContextMenu', {}),
    
    viewConfig : {
        preserveScrollOnRefresh : true //doesn't quite work how desired
    },

    title : 'Torrents',

    columns : [{
        header : 'File',
        flex : 1,
        dataIndex : 'name'
    },
    {
        header : 'Done',
        flex : 1,
        dataIndex : 'percentDone'
    },
    {
        header : 'Seeds',
        flex : 1,
        dataIndex : 'seedsConnected'
    },
    {
        header : 'Peers',
        flex : 1,
        dataIndex : 'peersConnected'
    },
    {
        header : 'Upload Speed',
        flex : 1,
        dataIndex : 'rateUpload'
    },
    {
        header : 'Download Speed',
        flex : 1,
        dataIndex : 'rateDownload'
    }],

    selModel : new Ext.selection.RowModel({
        mode : 'MULTI'
    }),
    
   
    applyTorrents : function(newValue, oldValue) { 
       
        this.store.loadData(newValue);
    }
});
