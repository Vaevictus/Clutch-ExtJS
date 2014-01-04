Ext.define('mobile.view.BottomTabs', {

    extend : 'Ext.tab.Panel',

    requires : ['mobile.view.TorrentsListContainer','mobile.view.SearchListContainer'],
    
    alias : 'widget.tabpanel',
    
    config : {
        activeTab : 0,

        tabBar : {
            layout : {
                pack : 'center',
                align : 'center'
            },
            docked : 'bottom'

        },

        defaults : {
            scrollable : true
        },

        items : [{
            title : 'Torrents',
            iconCls : 'download',
            xtype : 'torrentslistcontainer'
           
        },{
            title : 'PirateBay Search',
            iconCls: 'search',
            xtype : 'searchlistcontainer'
        },
        {
            title : 'Settings',
            iconCls: 'settings'
        }]

    }

});
