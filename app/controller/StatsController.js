Ext.define('Clutch.controller.StatsController', {

    extend : 'Deft.mvc.ViewController',

    inject : ['rpcService'],

    config : {

        rpcService : null
    },
    
    observe : {
        rpcService : {
            'statsreceived' : 'onStatsReceived'
        }
    },

    control : {
        btnCancel : {
            selector : 'button[action=cancel]',
            listeners : {
                click : 'cancel'
            }
        }
    },

   
   getStatsFromServer : function() {
     
     this.getRpcService().getStats();
   },
   
    onStatsReceived : function(data) {

        var args = data.arguments;

        this.getView().setData(args);
       
    },

    cancel : function(btn) {

        this.getView().close();
    }
});
