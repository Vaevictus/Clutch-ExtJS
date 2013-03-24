Ext.define('Clutch.view.settings.BandwidthSettings', {
    extend : 'Ext.form.FormPanel',

    //layout : 'form',

    title : 'Bandwidth',

    alias : 'widget.bandwidthsettings',

    items : [{
        xtype : 'fieldset',
        title : 'Normal Mode',
        items : [{
            fieldLabel : 'Download',
            allowBlank : false,
            xtype : 'numberfield'
        },
        {
            fieldLabel : 'Upload',
            allowBlank : false,
            xtype : 'numberfield'
        }]
    },
    {
        xtype : 'fieldset',
        title : 'Throttled Mode',
        items : [{
            fieldLabel : 'Download',
            allowBlank : false,
            xtype : 'numberfield'
        },
        {
            fieldLabel : 'Upload',
            allowBlank : false,
            xtype : 'numberfield'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: