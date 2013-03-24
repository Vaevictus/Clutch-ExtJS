Ext.define("Clutch.view.TorrentsGrid", {
    extend : 'Ext.grid.Panel',

    alias : 'widget.torrentsgrid',

    requires : ['Clutch.view.TorrentContextMenu'],

    store : 'TorrentTransfers',

    config : {
        torrents : null
    },

    contextMenu : Ext.create('Clutch.view.TorrentContextMenu', {}),

    viewConfig : {
        preserveScrollOnRefresh : true //doesn't quite work how desired
    },

    title : 'Torrents',

    columns : [{
        header : 'File',
        flex : 1,
        dataIndex : 'name'
    }, {
        header : 'Progress',
        dataIndex : 'percentDone',
        width : 110,
       // renderer : Clutch.util.RPC.progressRenderer
       renderer: function (v, m, r) {
           console.log(v);
                        var tmpValue = Math.round(v * 10000) /100; //rounds the number to 0-100 with 2 decimal places
                        var tmpText = tmpValue + '%';
                            
                        var progressRenderer = (function (pValue, pText) {
                            var b = new Ext.ProgressBar();
                            return function(pValue, pText) {
                                b.updateProgress(pValue, pText, true);
                                return Ext.DomHelper.markup(b.getRenderTree());
                            };
                        })(tmpValue, tmpText);
                        return progressRenderer(v, tmpText);
                    }
    }, {
        header : 'Seeds',
        flex : 1,
        dataIndex : 'seedsConnected'
    }, {
        header : 'Peers',
        flex : 1,
        dataIndex : 'peersConnected'
    }, {
        header : 'Upload Speed',
        flex : 1,
        dataIndex : 'rateUpload',
        renderer: function (v, m, r) {
            var value =  Ext.util.Format.fileSize(v);
            return value !== '-' ? value + '/sec' : value;
        }
    }, {
        header : 'Download Speed',
        flex : 1,
        dataIndex : 'rateDownload',
        renderer: function (v, m, r) {
            var value =  Ext.util.Format.fileSize(v);
            return value !== '-' ? value + '/sec' : value;
        }
    }],

    selModel : new Ext.selection.RowModel({
        mode : 'MULTI'
    }),

    applyTorrents : function(newValue, oldValue) {

        this.store.loadData(newValue);
    }
});
