Ext.define('Clutch.view.search.piratebay.SearchPanel', {
    
    requires : ['Clutch.view.search.piratebay.SearchResultGrid','Clutch.view.search.SearchTree', 'Clutch.view.search.properties.DetailsPanel'],
    
    extend : 'Ext.panel.Panel',

    alias : 'widget.piratebaysearchpanel',

    layout : 'border',

    title : 'PirateBay Search',

    selectable : true,

    items : [{
        xtype : 'searchtree',
        region : 'west',
        collapsible : true,
        split : true
    }, {
        xtype : 'piratebaysearchresultgrid',
        region : 'center',
        title : 'PirateBay Search Results'
    }, {
        xtype : 'searchresultdetailspanel',
        region : 'east',
        collapsed : true,
        collapsible : true,
        split : true,
        width : 400
    }]
   

});

