Ext.define('Clutch.view.settings.TransfersSettings', {
    extend : 'Ext.form.FormPanel',

    //layout : 'form',

    title : 'Transfers',

    alias : 'widget.transferssettings',

    items : [{
        xtype : 'fieldset',
        title : 'Limits',
        items : [{
            fieldLabel : 'Stop seeding at Ratio',
            xtype : 'numberfield'
        }, {
            fieldLabel : 'Stop seeding when inactive for',
            xtype : 'numberfield'
        }]
    }, {
        xtype : 'fieldset',
        title : 'Queues',
        items : [{
            fieldLabel : 'Download with maximum of',
            xtype : 'numberfield'
        }, {
            fieldLabel : 'Seed with maximum of',
            xtype : 'numberfield'
        }, {
            fieldLabel : 'Transfer is stalled when inactive for',
            xtype : 'numberfield'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: