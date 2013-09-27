Ext.define('mobile.view.SearchListContainer', {

    extend : 'Ext.Container',

    alias : 'widget.searchlistcontainer',

    requires : ['mobile.view.toolbar.SearchToolbar', 'Ext.ux.touch.grid.List', 'Ext.ux.touch.grid.feature.Feature', 'Ext.ux.touch.grid.feature.Sorter'],

    controller : 'mobile.controller.SearchController',

    inject : ['searchStore'],

    config : {

        layout : 'fit',

        searchStore : null,

        items : [{
            xtype : 'searchtoolbar',
            itemId : 'searchToolbar'

        }]
    },

    initialize : function() {

        this.callParent(arguments);

        this.add({

            xtype : 'touchgridpanel',

            itemId : 'searchlist',

            store : this.getSearchStore(),

            features : [{
                ftype : 'Ext.ux.touch.grid.feature.Sorter',
                launchFn : 'initialize'
                
            }],

            columns : [{
                header : 'Name',
                width : '40%',
                dataIndex : 'name',
                filter    : { type : 'string' }
            }, {
                header : 'Seeds',
                width : '5%',
                dataIndex : 'seeds',
                filter    : { type : 'numeric' }
            }, {
                header : 'Leechers',
                width : '5%',
                dataIndex : 'leechers',
                filter    : { type : 'numeric' }
            }, {
                header : 'Size',
                dataIndex : 'size',
                width : '10%',
                renderer : function(v, m, r) {
                    var value = Ext.util.Format.fileSize(v);
                    return value;
                },
                filter    : { type : 'numeric' }
            }, {
                header : 'Date Added',
                //xtype : 'datecolumn',
                dataIndex : 'pubDate',
                format : 'F j, Y, g:i a',
                width : '15%',
                 filter    : { type : 'date' }
            }, {
                header : 'Category',
                dataIndex : 'category',
                width : '10%',
                 filter    : { type : 'string' }
            }]
        });
    }
});
