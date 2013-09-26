Ext.define('Clutch.controller.BottomToolbarController', {

    extend : 'Deft.mvc.ViewController',

    inject : ['rpcService'],

    config : {

        rpcService : null
    },
    
    observe : {
        rpcService : {
            'statsreceived' : 'onStatsReceived',
            'settingsreceived': 'onSettingsReceived'
        }
    },
   
    
    onStatsReceived : function(rpcResponse) {
        
        this.getView().setStats(rpcResponse.arguments);
       
    },
    
    init : function() {
  
      this.callParent(arguments);
  
      this.getRpcService().getInitialSettings();  
    },
    
    onSettingsReceived: function(rpcResponse){

      var settings = rpcResponse.arguments;
 
      this.getView().setSettings(settings);  
  
    },

    cancel : function(btn) {

        this.getView().close();
    }
});
