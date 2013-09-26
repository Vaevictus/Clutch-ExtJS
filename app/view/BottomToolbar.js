Ext.define('Clutch.view.BottomToolbar', {

    requires : ['Clutch.view.statistics.SpeedComponent', 'Clutch.view.settings.SpeedChanger', 'Clutch.view.statistics.ServerInfo'],
    
    controller : 'Clutch.controller.BottomToolbarController',
    
    config : {
        
        settings : null,
        
        stats : null

    },

    extend : 'Ext.toolbar.Toolbar',

    alias : 'widget.bottomtoolbar',

    itemId : 'bottomtoolbar',

    border : false,

    frame : false,

    items : [{
        xtype : 'speedcomponent'
    }, {
        xtype : 'speedchanger'
    }, '->', {
        xtype : 'serverinfo'
    }],

    applySettings : function(settings, oldValue) {
       
        var speedControl = this.down('speedcomponent'), speedChanger = this.down('speedchanger'), serverInfo = this.down('serverinfo');

        speedChanger.setValue(settings);
        
        speedControl.setFreeSpace(settings['download-dir-free-space']);

        serverInfo.setServerVersion(settings['version']);

        serverInfo.setRpcVersion(settings['rpc-version']);

    },

    applyStats : function(stats, oldValue) { 

        var speedControl = this.down('speedcomponent');

        speedControl.setSpeedUp(stats['uploadSpeed']);

        speedControl.setSpeedDown(stats['downloadSpeed']);
    }
});
