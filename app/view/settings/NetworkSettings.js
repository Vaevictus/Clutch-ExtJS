Ext.define('Clutch.view.settings.NetworkSettings', {
    extend : 'Ext.form.FormPanel',

    //layout : 'form',

    title : 'Network',

    alias : 'widget.networksettings',

    items : [{
        xtype : 'fieldset',
        title : 'Peer Communication',
        items : [{
            fieldLabel : 'Enable Micro Transport Protocol',
            allowBlank : false,
            xtype : 'checkbox'
        }, {
            fieldLabel : 'Incoming TCP port number',
            xtype : 'numberfield'
        }, {
            fieldLabel : 'Randomize port on launch',
            xtype : 'checkbox'
        }, {
            fieldLabel : 'Automatically Map Port',
            xtype : 'checkbox'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: