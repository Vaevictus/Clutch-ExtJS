Ext.define('mobile.view.TorrentsListContainer', {

    extend : 'Ext.Container',

    alias : 'widget.torrentslistcontainer',

    requires : ['mobile.view.toolbar.TorrentsToolbar', 'Ext.ux.touch.grid.List', 'Ext.ux.touch.grid.List', 'Ext.ux.touch.grid.feature.Feature', 'Ext.ux.touch.grid.feature.Sorter'],

    controller : 'mobile.controller.TorrentsListController',

    inject : ['torrentsStore'],

    config : {

        layout : 'fit',

        torrentsStore : null,

        items : [{
            xtype : 'torrenttoolbar',
            itemId : 'torrentToolbar'

        }]
    },

    initialize : function() {

        this.callParent(arguments);

        this.add({

            xtype : 'touchgridpanel',

            features : [{
                ftype : 'Ext.ux.touch.grid.feature.Sorter',
                launchFn : 'initialize'

            }],
            itemId : 'torrentsList',

            store : this.getTorrentsStore(),

            columns : [{
                header : 'File',
                dataIndex : 'name',
                width : '50%',
                filter    : { type : 'string' }
            }, {
                header : 'Status',
                // xtype : 'torrentstatuscolumn',
                dataIndex : 'status',
                width : '10%',
                renderer : function(value) {
                    return Transmission.RPC.parseTorrentState(value);
                },
                filter    : { type : 'string' }
            }, {
                header : 'Progress',
                dataIndex : 'percentDone',
                width : '10%',
                filter    : { type : 'numeric' }
                //  xtype : 'torrentprogresscolumn'

            }, {
                // xtype : 'templatecolumn',
                header : 'Seeds',
                width : '10%',
                tpl : '{realSeedsSendingToUs} ({realSeeds})',
                filter    : { type : 'numeric' }
            }, {
                header : 'Peers',
                dataIndex : 'realPeers',
                width : '10%',
                filter    : { type : 'numeric' }
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
                filter    : { type : 'numeric' }
                //     xtype : 'speedcolumn'
            }]
        });

    }
});
