Ext.define('Clutch.view.settings.PeerSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'Peers',

    config : {
        fields : ['peer-limit-global', 'peer-limit-per-torrent', 'lpd-enabled', 'dht-enabled', 'pex-enabled','utp-enabled', 'blocklist-enabled', 'blocklist-url']
    },

    alias : 'widget.peersettings',

    items : [{
        xtype : 'fieldset',
        title : 'Connections',
        items : [{
            fieldLabel : 'Max Peers Per Torrent',
            allowBlank : false,
            xtype : 'numberfield',
            name : 'peer-limit-per-torrent'
        }, {
            fieldLabel : 'Max Peers Overall',
            allowBlank : false,
            xtype : 'numberfield',
            name : 'peer-limit-global'
        }]
    }, {
        xtype : 'fieldset',
        title : 'Options',
        items : [{
            fieldLabel : 'Encryption',
            name : 'encryption',
            xtype : 'combo',
            queryMode : 'local',
            valueField : 'value',
            //displayField : 'display',
            store : ['preferred', 'required', 'tolerated'] //todo - use a real store
            // store: [
            // "value" : "preferred",
            // "display" : 'Preferred'
            // },{
            // 'value' : 'required',
            // 'display' : 'Required'
            // },{
            // 'value' : 'tolerated',
            // 'display' : 'Tolerated'
            // }]

        }, {
            xtype : 'checkboxfield',
            boxLabel : 'Use PEX to find more peers',
            name : 'pex-enabled'
        }, {
            xtype : 'checkboxfield',
            boxLabel : 'Use DHT to find more peers',
            name : 'dht-enabled'
        }, {
            xtype : 'checkboxfield',
            boxLabel : 'Use LPD to find more peers',
            name : 'lpd-enabled'
        },{
            boxLabel : 'Enable Micro Transport Protocol',
            allowBlank : false,
            name : 'utp-enabled',
            xtype : 'checkboxfield'
        }]
    }, {
        xtype : 'fieldset',
        title : 'Blocklist',
        items : [{
            xtype : 'checkboxfield',
            boxLabel : 'Enable Blocklist',
            name : 'blocklist-enabled'
        }, {
            xtype : 'textfield',
            fieldLabel : 'Blocklist URL',
            name : 'blocklist-url'
        }, {
            xtype : 'button',
            text : 'update',
            itemId : 'updateblocklist',
			margin: '0 0 5 0',
        }]
    }]
});

// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: