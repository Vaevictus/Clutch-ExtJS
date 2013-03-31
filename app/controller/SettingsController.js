Ext.define('Clutch.controller.SettingsController', {

    extend : 'Ext.app.Controller',

    views : ['settings.SettingsDialog'],

    init : function(app) {
        var me = this;
       
        me.control({

            'torrenttoolbar button[action=show-settings]' : {
                click : me.showSettingsDialog
            },
            'settingsdialog treepanel' : {
                itemclick : me.onSettingsNodeClick
            },
            'settingsdialog  button[action=save]' : {
                click : me.onSaveButtonClick
            },
            'settingsdialog  button[action=cancel]' : {
                click : me.onCancelButtonClick
            },
            'settingsdialog' : {
                render : me.onRender
            },
            'advancedsettings' : {
                edit : me.onAdvancedPropertyChanged
            }
        });
    },


    showSettingsDialog : function() {

        var dialog = Ext.create('Clutch.view.settings.SettingsDialog');
        dialog.show();
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

    onRender : function(dialog) {

        var params = {
            "method" : "session-get",
            "arguments" : {
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : params,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) { debugger;
                Clutch.app.fireEvent('settingssreceived', Ext.JSON.decode(response.responseText));
                dialog.down('advancedsettings').setSource(Ext.JSON.decode(response.responseText).arguments);

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
    },

    onAdvancedPropertyChanged : function(editor, e, eOpts) {
        //persist the value to the server
        debugger;
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
            success : function(response) { debugger;
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
