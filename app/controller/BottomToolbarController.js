Ext.define('Clutch.controller.BottomToolbarController', {

    extend : 'Deft.mvc.ViewController',

    inject : ['rpcService'],

    config : {

        rpcService : null
    },
    
    observe : {
        rpcService : {
            'statsreceived' : 'onStatsReceived',
            'settingsreceived': 'onSettingsReceived',
            'portstatusreceived' : 'onPortStatusReceived'
        }
    },
    
    control: {
      serverInfoContainer : {
          selector : 'serverinfo'
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
    onPortStatusReceived : function(rpcResponse){
        var isOpen = rpcResponse.arguments['port-is-open'];
      
        this.getServerInfoContainer().setPortStatus(isOpen);
      
    },

    cancel : function(btn) {

        this.getView().close();
    }
});
