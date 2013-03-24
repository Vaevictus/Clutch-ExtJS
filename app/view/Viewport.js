Ext.define('Clutch.view.Viewport', {
    
    renderTo: Ext.getBody(),
    
    extend: 'Ext.container.Viewport',
    
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Clutch.view.Tree',
        'Clutch.view.StatusToolbar',
        'Clutch.view.MainToolbar',
        'Clutch.view.TorrentsGrid'
    ],

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'torrenttoolbar'
        
    },
    {
      region: 'west',
      xtype: 'torrenttree'
      //width: 200,
      //title: 'west here'  
    },
    {
        region: 'center',
        xtype: 'torrentsgrid'
        
        
    },
    {
        region: 'south',
        xtype: 'panel',
        title: 'Details',
        height: 200,
        collapsible: true,
        collapsed: true
        
    }]
});