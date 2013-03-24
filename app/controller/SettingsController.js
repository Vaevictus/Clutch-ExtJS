Ext.define('Clutch.controller.SettingsController', {

    extend : 'Ext.app.Controller',
    
    views : ['settings.SettingsDialog'],
    
    init : function(app) {
        var me = this;

        me.control({
            
            'torrenttoolbar button[action=show-settings]' : {
                click : me.showSettingsDialog
            }
        });
    },
    
     showSettingsDialog: function() {
        var dialog = Ext.create('Clutch.view.settings.SettingsDialog', {layout: 'fit'});
        dialog.show();
    }
}); 