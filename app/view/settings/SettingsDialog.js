Ext.define("Clutch.view.settings.SettingsDialog", {
    extend : 'Ext.window.Window',

    requires : ['Clutch.view.settings.GeneralSettings', 'Clutch.view.settings.TransfersSettings', 'Clutch.view.settings.NetworkSettings', 'Clutch.view.settings.BandwidthSettings'],

    title : 'Settings',

    alias : 'widget.settingsdialog',

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
