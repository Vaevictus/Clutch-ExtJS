Ext.define('Clutch.view.Viewport', {

    renderTo : Ext.getBody(),

    extend : 'Ext.container.Viewport',

    requires : ['Clutch.view.search.SearchField', 'Clutch.view.torrent.TorrentsPanel', 'Clutch.view.search.piratebay.SearchPanel', 'Clutch.view.search.piratebay.TopPanel', 'Clutch.view.BottomToolbar', 'Ext.layout.container.Border', 'Clutch.view.MainToolbar', 'Clutch.view.search.isohunt.SearchPanel', 'Clutch.view.torrent.TorrentsGrid'],

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
            xtype : 'torrentspanel'
        }, {
            xtype : 'isohuntsearchpanel'
        },{
          xtype : 'piratebaysearchpanel'  
        }, {
            xtype : 'piratebaytoppanel'
        }]

    }]

});

