Ext.define('Clutch.controller.SettingsController', {

    extend : 'Deft.mvc.ViewController',

   inject : ['rpcService'],
    
    config : {
        rpcService : null
    },

    control : {

        treepanel : {
            selector : 'treepanel',
            listeners : {
                itemclick : 'onSettingsNodeClick'
            }
        },
        btnSave : {
            selector : 'button[action=save]',
            listeners : {
                click : 'onSaveButtonClick'
            }
        },
        btnCancel : {
            selector : 'button[action=cancel]',
            listeners : {
                click : 'onCancelButtonClick'
            }
        },

        settingsCard : {
            selector : 'settingscardbase',

            listeners : {
                activate : 'onShowSettingsCard'
            }
        },
        
        advancedSettings : {
            live : true,
            selector : 'advancedsettings',
            listeners : {
                edit : 'onAdvancedPropertyChanged'
            }
        }
    },

    // init : function(app) {
// 
        // var me = this;
// 
        // app.on({
            // settingschanged : me.onSettingsChanged,
            // settingsreceived : me.onSettingsReceived
        // });
// 
    // },
    onSettingsReceived : function(newSettings) {

        var cmp = Ext.ComponentQuery.query('#bottomtoolbar')[0];

        cmp.setSettings(newSettings);

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

        var dialog = treepanel.up('settingsdialog').changeActiveItem(index);
    },

    onCancelButtonClick : function(btn) {

      this.getView().close();
    },

    onSaveButtonClick : function(btn) {

        this.saveSettings();
    },

    onShowSettingsCard : function(card) {
        
         var myFields = card.getFields();

        this.getRpcService().sessionGet(myFields).then(
            
            function(rpcResponse){
                
                card.setValue(rpcResponse['arguments']);     
            }
        );

    },

    //todo - reimplement propertypanel in settings dialog, will use this function (but in the panel not the controller(!))
    onAdvancedPropertyChanged : function(editor, e, eOpts) {//TODO this rpc call should be moved to transmissionrpc package
        //persist the value to the server
       
        var params = []
        params[e.record.data.name] = e.value;
        
        this.getRpcService().sessionSet(params).then({
            success: function(rpcResponse){
                e.grid.down('advancedsettings').setSource(rpcResponse.arguments);
            },
            scope : this
        });

        
    },
    
    saveSettings : function() {

        var currentCard = this.getView().down('#cardcontainer').getLayout().getActiveItem();
        var values = currentCard.getValues();
        this.getRpcService().sessionSet(values);
    }
});
