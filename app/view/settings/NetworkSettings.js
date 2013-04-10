Ext.define('Clutch.view.settings.NetworkSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'Network',

    config : {
        fields : ['peer-port', 'peer-port-random-on-start', 'port-forwarding-enabled']
    },

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
            xtype : 'numberfield',
            name : 'peer-port'
        }, {
            fieldLabel : 'Randomize port on launch',
            xtype : 'checkbox',
            name : 'peer-port-random-on-start'
        }, {
            fieldLabel : 'Automatically Map Port',
            xtype : 'checkbox',
            name : 'port-forwarding-enabled'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: