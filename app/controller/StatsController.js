Ext.define('Clutch.controller.StatsController', {

    extend : 'Ext.app.Controller',

    views : ['statistics.StatsDialog'],

    init : function(app) {
        var me = this;

        me.control({

            'torrenttoolbar button[action=show-statistics]' : {
                click : me.showStatisticsDialog
            }
        });
        app.on({

            statsreceived : me.onStatsReceived

        });
    },

    showStatisticsDialog : function() {
        var dialog = Ext.create('Clutch.view.statistics.StatsDialog', {
            layout : 'fit'
        });
        dialog.show();
    },

    onStatsReceived : function(data) {
        //alert('from the other contorller');
    }
});
