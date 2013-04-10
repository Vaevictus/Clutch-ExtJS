Ext.define('Clutch.controller.SettingsController', {

    extend : 'Ext.app.Controller',

    views : ['settings.SettingsDialog'],

    init : function(app) {
        var me = this;

        app.on({
            settingschanged : me.onSettingsChanged,
            settingsreceived : me.onSettingsReceived
        });
        me.control({
            'settingsdialog treepanel' : {
                itemclick : me.onSettingsNodeClick
            },
            'settingsdialog  button[action=save]' : {
                click : me.onSaveButtonClick
            },
            'settingsdialog  button[action=cancel]' : {
                click : me.onCancelButtonClick
            },
            'settingsdialog settingscardbase' : {
                activate : me.onShowSettingsCard
            },
            'advancedsettings' : {
                edit : me.onAdvancedPropertyChanged
            }
        });
    },
    onSettingsReceived : function(newSettings){
      var speedComponents = Ext.ComponentQuery.query('speedchanger');

        Ext.each(speedComponents, function(c) {
            c.setValue(newSettings);
        });  
    },
    onSettingsChanged : function() {
      Ext.create('widget.uxNotification', {
            title : 'Notification',
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : 'Settings changed successfully.',
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();
    },
    
    onSettingsNodeClick : function(treepanel, record, item, index, e, eOpts) {

        var dialog = treepanel.up('settingsdialog').setActiveItem(record.raw.panel);
    },

    onCancelButtonClick : function(btn) {

        btn.up('settingsdialog').close();
    },
    onSaveButtonClick : function(btn) {

        btn.up('settingsdialog').saveSettings();
    },

    onShowSettingsCard : function(card) {

        card.getValuesFromServer();

    },

    onAdvancedPropertyChanged : function(editor, e, eOpts) {
        //persist the value to the server
        var params = {
            "method" : "session-set",
            "arguments" : {
            }
        };
        params.arguments[e.record.data.name] = e.value;

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : params,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {
                Clutch.app.fireEvent('settingssreceived', Ext.JSON.decode(response.responseText));
                e.grid.down('advancedsettings').setSource(Ext.JSON.decode(response.responseText).arguments);

            },
            scope : this,

            failure : function(response) {
                var x = response.getResponseHeader('X-Transmission-Session-Id');
                if (x) {
                    window.sessionId = x;
                    this.onRender(dialog);
                }
            }
        });
    }
});
