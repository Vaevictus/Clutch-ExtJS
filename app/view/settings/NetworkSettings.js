Ext.define('Clutch.view.settings.NetworkSettings', {
	
    extend : 'Clutch.view.settings.SettingsCardBase',
	requires : ['Clutch.store.TimeChooserStore'],
    title : 'Network',

    config : {
        fields : ['peer-port', 'peer-port-random-on-start', 'port-forwarding-enabled', 'alt-speed-enabled', 'alt-speed-down', 'alt-speed-up', 'speed-limit-up','speed-limit-up-enabled', 'speed-limit-down','speed-limit-down-enabled', 'alt-speed-time-enabled', 'alt-speed-time-begin', 'alt-speed-time-end', 'alt-speed-time-day']
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
                boxLabel : 'Download limit enabled',
                xtype : 'checkbox',
                name : 'speed-limit-down-enabled'
            }, {
                fieldLabel : 'Upload',
                allowBlank : false,
                xtype : 'numberfield',
                name : 'speed-limit-up'
            },
            {
                boxLabel : 'Upload limit enabled',
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
            }, {
                boxLabel : 'Scheduled Throttled Mode',
                xtype : 'checkbox',
                name : 'alt-speed-time-enabled'
            }, {
				xtype: 'combobox',
				displayField: 'label',
				valueField: 'value',
				fieldLabel : 'From',
				store: Ext.create('Clutch.store.TimeChooserStore'),
				name : 'alt-speed-time-begin'
			}, {
				xtype: 'combobox',
				displayField: 'label',
				valueField: 'value',
				fieldLabel : 'To',
				store: Ext.create('Clutch.store.TimeChooserStore'),
				name : 'alt-speed-time-end'
			}, {
				xtype: 'combobox',
				displayField: 'label',
				valueField: 'value',
				fieldLabel : 'When',
				store: Ext.create('Ext.data.Store', {
					model: 'Clutch.model.TimeChooser',
					type : 'json',
					proxy : {
						type : 'memory'
					},
					data: [
						{label: 'Sunday', value: 1},
						{label: 'Monday', value: 2},
						{label: 'Tuesday', value: 4},
						{label: 'Wednesday', value: 8},
						{label: 'Thursday', value: 16},
						{label: 'Friday', value: 32},
						{label: 'Saturday', value: 64},
						{label: 'Weekdays', value: 62},
						{label: 'Weekends', value: 65},
						{label: 'All Days', value: 127}
					]						
				}),
				name : 'alt-speed-time-day'
			}
			]
        }]
    }, {
        xtype : 'fieldset',
        title : 'Peer Communication',
        items : [{
            fieldLabel : 'Incoming TCP port number',
            xtype : 'numberfield',
            name : 'peer-port'
        }, {
            boxLabel : 'Randomize port on launch',
            xtype : 'checkbox',
            name : 'peer-port-random-on-start'
        }, {
            boxLabel : 'Automatically Map Port',
            xtype : 'checkbox',
            name : 'port-forwarding-enabled'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: