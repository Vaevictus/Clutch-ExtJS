Ext.define('Clutch.view.search.isohunt.SearchPanel', {
    
    requires : ['Clutch.view.search.isohunt.SearchResultGrid','Clutch.view.search.SearchTree', 'Clutch.view.search.properties.DetailsPanel'],
    
    extend : 'Ext.panel.Panel',

    alias : 'widget.isohuntsearchpanel',

    layout : 'border',

    title : 'ISO Hunt Search',

    selectable : true,

    items : [{
        xtype : 'searchtree',
        region : 'west'
        
    }, {
        xtype : 'isohuntsearchresultgrid',
        region : 'center',
        title : 'ISO Hunt Search Results'
    }, {
        xtype : 'searchresultdetailspanel',
        region : 'east'
        
    }]

});

