Ext.define('Clutch.view.BottomToolbar', {
    extend : 'Ext.toolbar.Toolbar',

    alias : 'widget.bottomtoolbar',
    
    requires: ['Clutch.view.statistics.SpeedComponent', 'Clutch.view.settings.SpeedChanger'],
        
    border : false,
    
    frame : false,

    items : [{
        xtype : 'speedcomponent'
    },{
        xtype : 'speedchanger'
    }]

});
