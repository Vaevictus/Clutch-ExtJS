Ext.define('Clutch.view.settings.BandwidthSettings', {
    extend : 'Ext.form.FormPanel',

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'Bandwidth',

    alias : 'widget.bandwidthsettings',
    
    config : {
      
      fields : ['alt-speed-enabled','alt-speed-down', 'alt-speed-up', 'speed-limit-up', 'speed-limit-down']  
    },
    items : [{
        xtype : 'fieldset',
        title : 'Normal Mode',
        items : [{
            fieldLabel : 'Download',
            allowBlank : false,
            xtype : 'numberfield',
            name : 'speed-limit-down'
        },
        {
            fieldLabel : 'Upload',
            allowBlank : false,
            xtype : 'numberfield',
            name : 'speed-limit-up'
        }]
    },
    {
        xtype : 'fieldset',
        title : 'Throttled Mode',
        items : [{
            fieldLabel : 'Download',
            allowBlank : false,
            xtype : 'numberfield',
            name : 'alt-speed-down'
        },
        {
            fieldLabel : 'Upload',
            allowBlank : false,
            xtype : 'numberfield',
            name : 'alt-speed-up'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: