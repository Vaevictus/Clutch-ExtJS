Ext.define('Clutch.view.search.piratebay.TopPanel', {

    extend : 'Ext.panel.Panel',
    
    requires : ['Clutch.view.search.piratebay.SearchResultGrid'],

    alias : 'widget.piratebaytoppanel',

    layout : 'border',

    title : 'PirateBay Top',
    
    items : [{
        xtype : 'searchtree',

        region : 'west'
    }, {
        xtype : 'piratebaysearchresultgrid',
        region : 'center',
        store : Ext.create('Clutch.store.SearchResult')
    }, {
        xtype : 'searchresultdetailspanel',
        region : 'east',
        width : 300
    }]

});
