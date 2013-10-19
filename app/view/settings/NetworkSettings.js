Ext.define('Clutch.view.settings.NetworkSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'Network',

    config : {
        fields : ['peer-port', 'peer-port-random-on-start', 'port-forwarding-enabled', 'alt-speed-enabled', 'alt-speed-down', 'alt-speed-up', 'speed-limit-up','speed-limit-up-enabled', 'speed-limit-down','speed-limit-down-enabled']
    },

    alias : 'widget.networksettings',

    items : [{
        xtype : 'fieldset',
        title : 'Bandwidth',
        items : [{
            xtype : 'fieldset',
            title : 'Normal Mode',
            items : [{
                fieldLabel : 'Download',
                allowBlank : false,
                xtype : 'numberfield',
                name : 'speed-limit-down'
            }, {
                fieldLabel : 'Download limit enabled',
                xtype : 'checkbox',
                name : 'speed-limit-down-enabled'
            }, {
                fieldLabel : 'Upload',
                allowBlank : false,
                xtype : 'numberfield',
                name : 'speed-limit-up'
            },
            {
                fieldLabel : 'Upload limit enabled',
                xtype : 'checkbox',
                name : 'speed-limit-up-enabled'
            }]
        }, {
            xtype : 'fieldset',
            title : 'Throttled Mode',
            items : [{
                fieldLabel : 'Download',
                allowBlank : false,
                xtype : 'numberfield',
                name : 'alt-speed-down'
            }, {
                fieldLabel : 'Upload',
                allowBlank : false,
                xtype : 'numberfield',
                name : 'alt-speed-up'
            }]
        }]
    }, {
        xtype : 'fieldset',
        title : 'Peer Communication',
        items : [{
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