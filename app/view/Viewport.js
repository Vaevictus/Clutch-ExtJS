Ext.define('Clutch.view.Viewport', {

    renderTo : Ext.getBody(),

    extend : 'Ext.container.Viewport',

    requires : ['Ext.tab.Panel', 'Ext.layout.container.Border', 'Clutch.view.Tree', 'Clutch.view.StatusToolbar', 'Clutch.view.MainToolbar', 'Clutch.view.search.SearchResultGrid', 'Clutch.view.TorrentsGrid'],

    layout : {
        type : 'border'
    },

    items : [{
        region : 'north',
        xtype : 'torrenttoolbar'

    }, {
        region : 'center',
        xtype : 'tabpanel',
        tabBar : {
            items : [{
                xtype : 'tbfill'
            }, {
                xtype : 'textfield',
                itemId : 'searchField',
                emptyText : 'Search isohunt.com'
            }]
        },

        items : [{
            xtype : 'panel',
            title : 'Torrents',
            layout : 'border',
            items : [{
                region : 'west',
                xtype : 'torrenttree'

            }, {
                region : 'center',
                xtype : 'torrentsgrid'

            }, {
                region : 'south',
                xtype : 'panel',
                title : 'Details',
                height : 200,
                collapsible : true,
                collapsed : true

            }]
        }, {
            xtype : 'searchresultgrid',
            title : 'Search Results'
        }]

    }]
});
