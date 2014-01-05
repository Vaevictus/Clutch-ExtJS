Ext.define('Clutch.view.search.piratebay.TopPanel', {

    extend : 'Ext.panel.Panel',

    controller : 'Clutch.controller.PirateBaySearchController',

    requires : ['Clutch.view.search.piratebay.TopResultsGrid'],

    alias : 'widget.piratebaytoppanel',

    layout : 'border',

    title : 'PirateBay Top',

    items : [{
        xtype : 'searchtree',

        region : 'west'
    }, {
        xtype : 'panel',
        
        layout : 'fit',
        
        region : 'center',
        
        tbar : [{
            xtype : 'button',
            itemId : 'btnRefresh',
            text : 'Refresh'
        },{
            xtype : 'button',
            text : 'Download Selected',
            itemId : 'btnTopDownloadselected'
        }],
        items : [{
            xtype : 'piratebaytopresultsgrid',
            store : Ext.create('Clutch.store.SearchResult')

        }]
    }, {
        xtype : 'searchresultdetailspanel',
        region : 'east',
        hideComments : true
        
    }]

});
