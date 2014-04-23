


function printTime(t) {
	if (t < 10) return ('0' + t);
	return t;
}

function createTimeStore() {
	var timeStore = Ext.create('Ext.data.Store', {
		fields: ['label', 'value'],
		data : [			
			{'label' : 'test', 'value': 0}
		],		
	});
	
	for (i=0; i<24; i++) {
		for (j=0;j<6;j++) {
			var entry = {'label': '' + printTime(i) + ':' + printTime(j*10), 'value': String(i*60 + j*10)};
			console.log(entry);
			timeStore.data.add({'label': '' + printTime(i) + ':' + printTime(j*10), 'value': String(i*60 + j*10)});
		}
	}
	return timeStore;
}

var timeStore = createTimeStore();



Ext.define('Clutch.view.settings.NetworkSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'Network',

    config : {
        fields : ['peer-port', 'peer-port-random-on-start', 'port-forwarding-enabled', 'alt-speed-enabled', 'alt-speed-down', 'alt-speed-up', 'speed-limit-up','speed-limit-up-enabled', 'speed-limit-down','speed-limit-down-enabled', 'alt-speed-time-enabled']
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
            },
			{
				xtype: 'combobox',
				displayField: 'label',
				valueField: 'value',
				fieldLabel : 'From',
				store: timeStore,
				name : 'alt-speed-time-begin'
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