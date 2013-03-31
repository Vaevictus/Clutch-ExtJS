Ext.define('Clutch.controller.StatsController', {

    extend : 'Ext.app.Controller',

    views : ['statistics.StatsDialog'],

    init : function(app) {
        var me = this;
        app.on({
            statsreceived : me.onStatsReceived
        });

        me.control({

            'torrenttoolbar button[action=show-statistics]' : {
                click : me.showStatisticsDialog
            },

            'statsdialog  button[action=cancel]' : {
                click : me.onCancelButtonClick
            }
        });
        app.on({

            statsreceived : me.onStatsReceived

        });
    },

    showStatisticsDialog : function() {

        var dialog = Ext.create('Clutch.view.statistics.StatsDialog', {

        });
        dialog.show();
    },

    onStatsReceived : function(data) {
        
        Ext.each(Ext.ComponentQuery.query('statsdialog'), function(dialog) {
           dialog.setData(data.arguments); 
        });
    },

    onCancelButtonClick : function(btn) {

        btn.up('statsdialog').close();
    }
});
