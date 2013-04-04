Ext.define('Clutch.view.Viewport', {

    renderTo : Ext.getBody(),

    extend : 'Ext.container.Viewport',

    requires : ['Clutch.view.torrent.properties.DetailsPanel', 'Ext.layout.container.Border', 'Clutch.view.statistics.SpeedComponent', 'Clutch.view.torrent.Tree', 'Clutch.view.MainToolbar', 'Clutch.view.search.SearchResultGrid', 'Clutch.view.torrent.TorrentsGrid'],

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
                xtype : 'speedcomponent'
            }]
        },

        items : [{
            selectable : true,
            xtype : 'panel',
            title : 'Torrents',
            layout : 'border',
            items : [{
                region : 'west',
                xtype : 'torrenttree',
                split : true,
                collapsible : true,
                collapsed : false

            }, {
                xtype : 'toolbar',
                region : 'south',
                items : ['Hello']

            }, {
                region : 'center',
                xtype : 'torrentsgrid'

            }, {
                region : 'east',
                xtype : 'torrentdetailspanel',
                width : 500,
                collapsible : true,
                collapsed : true,
                split : true
                

            }]
        }, {
            xtype : 'searchresultgrid',
            title : 'Search Results'
        }]

    }]

});
