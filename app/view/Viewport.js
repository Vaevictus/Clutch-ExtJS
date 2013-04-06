Ext.define('Clutch.view.Viewport', {

    renderTo : Ext.getBody(),

    extend : 'Ext.container.Viewport',

    requires : ['Clutch.view.search.properties.DetailsPanel','Clutch.view.search.SearchTree', 'Clutch.view.BottomToolbar', 'Clutch.view.torrent.properties.DetailsPanel', 'Ext.layout.container.Border', 'Clutch.view.statistics.SpeedComponent', 'Clutch.view.torrent.Tree', 'Clutch.view.MainToolbar', 'Clutch.view.search.SearchResultGrid', 'Clutch.view.torrent.TorrentsGrid'],

    layout : {
        type : 'border'
    },

    items : [{
        region : 'north',
        xtype : 'torrenttoolbar'

    }, {
        xtype : 'bottomtoolbar',
        region : 'south'
    }, {
        region : 'center',
        xtype : 'tabpanel',

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
            selectable : true,
            xtype : 'panel',
            title : 'Search',
            layout : 'border',
            items : [{
                xtype : 'searchtree',
                region : 'west',
                collapsible : true,
                split : true
            }, {
                xtype : 'searchresultgrid',
                region : 'center',
                title : 'Search Results'
            }
            ,{
                xtype : 'searchresultdetailspanel',
                region : 'east',
                collapsed : true,
                collapsible : true,
                split : true,
                width : 400
            }
            ]

        }]

    }]

});

