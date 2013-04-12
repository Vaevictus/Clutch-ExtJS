Ext.define('Clutch.view.search.piratebay.TopPanel', {

    extend : 'Ext.panel.Panel',
    
    requires : ['Clutch.view.search.piratebay.TopResultsGrid'],

    alias : 'widget.piratebaytoppanel',

    layout : 'border',

    title : 'PirateBay Top',
    
    items : [{
        xtype : 'searchtree',

        region : 'west'
    }, {
        xtype : 'piratebaytopresultsgrid',
        region : 'center',
        store : Ext.create('Clutch.store.SearchResult')
      
    }, {
        xtype : 'searchresultdetailspanel',
        region : 'east',
        hideComments : true
    }]    

});
