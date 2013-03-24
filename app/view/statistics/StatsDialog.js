Ext.define("Clutch.view.statistics.StatsDialog", {
    extend : 'Ext.window.Window',

    //requires : [],

    title : 'Statistics',

    alias : 'widget.statsdialog',

    modal : true,

    width : 600,

    height : 600,

    items : [{
        xtype : 'tabpanel',
        items : [{
            xtype : 'generalsettings'
        }, {
            xtype : 'transferssettings'
        }, {
            xtype : 'networksettings'
        }, {
            xtype : 'bandwidthsettings'
        }]
    }]

});
