Ext.define('mobile.view.TorrentsList', {

    extend : 'Ext.ux.touch.grid.List',

    alias : 'widget.torrentslist',

    requires : ['Ext.ux.touch.grid.List', 'Ext.ux.touch.grid.List', 'Ext.ux.touch.grid.feature.Feature', 'Ext.ux.touch.grid.feature.Sorter'],

    inject : ['torrentsStore'],
    
    
    config : {

        torrentsStore : null,

        title : 'torrents',
        columns : [{
            header : 'File',
            dataIndex : 'name',
            width : '50%',
            filter : {
                type : 'string'
            }
        }, {
            header : 'Status',
            // xtype : 'torrentstatuscolumn',
            dataIndex : 'status',
            width : '10%',
            renderer : function(value) {
                return Transmission.RPC.parseTorrentState(value);
            },
            filter : {
                type : 'string'
            }
        }, {
            header : 'Progress',
            dataIndex : 'percentDone',
            width : '10%',
            filter : {
                type : 'numeric'
            }
            //  xtype : 'torrentprogresscolumn'

        }, {
            // xtype : 'templatecolumn',
            header : 'Seeds',
            width : '10%',
            dataIndex : 'realSeeds',
            //itemTpl : '{reelSeeds} x {realSeedsSendingToUs}',
            filter : {
                type : 'numeric'
            }
        }, {
            header : 'Peers',
            dataIndex : 'realPeers',
            width : '10%',
            filter : {
                type : 'numeric'
            }
            //xtype : 'templatecolumn',
            // tpl : '{realPeersSendingToUs} ({realPeers})'
        }, {
            header : 'Download Speed',
            dataIndex : 'rateDownload',
            width : '10%',
            renderer : function(v, m, r) {
                var value = Ext.util.Format.fileSize(v);
                return value !== '-' ? value + '/sec' : value;
            },
            filter : {
                type : 'numeric'
            }
            //     xtype : 'speedcolumn'
        }]

    },

    initialize : function() { debugger;

        this.store = this.getTorrentsStore();

        this.callParent(arguments);

    },
    // features : [{
    // ftype : 'Ext.ux.touch.grid.feature.Sorter',
    // launchFn : 'initialize'
    //
    // }],
    itemId : 'torrentsList',

});
