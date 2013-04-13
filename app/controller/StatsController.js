Ext.define('Clutch.controller.StatsController', {

    extend : 'Ext.app.Controller',

    views : ['statistics.StatsDialog'],

    init : function(app) {
        var me = this;
        app.on({
            statsreceived : me.onStatsReceived
        });

        me.control({
            'statsdialog  button[action=cancel]' : {
                click : me.onCancelButtonClick
            }
        });
        app.on({

            statsreceived : me.onStatsReceived

        });
    },

    onStatsReceived : function(data) {

        var args = data.arguments;

        Ext.each(Ext.ComponentQuery.query('statsdialog'), function(dialog) {
            dialog.setData(args);
        });

        Ext.each(Ext.ComponentQuery.query('#bottomtoolbar'), function(tb) {
            tb.setStats(args);
        });
    },

    onCancelButtonClick : function(btn) {

        btn.up('statsdialog').close();
    }
});
