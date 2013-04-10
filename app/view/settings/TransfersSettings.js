Ext.define('Clutch.view.settings.TransfersSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'Transfers',

    alias : 'widget.transferssettings',

    config : {
        fields : ['seedRatioLimit', 'seedRatioLimited', 'download-queue-size', 'download-queue-enabled', 'idle-seeding-limit', 'idle-seeding-limit-enabled', 'seed-queue-size']
    },

    items : [{
        xtype : 'fieldset',
        title : 'Limits',
        items : [{
            fieldLabel : 'Stop seeding at Ratio',
            xtype : 'numberfield',
            name : 'seedRatioLimit'
        }, {
            fieldLabel : 'Stop seeding when inactive for (x) minutes',
            xtype : 'numberfield',
            name : 'idle-seeding-limit'
        }]
    }, {
        xtype : 'fieldset',
        title : 'Queues',
        items : [{
            fieldLabel : 'Max number of torrents downloading',
            xtype : 'numberfield',
            name : 'download-queue-size'
        }, {
            fieldLabel : 'Max number of torrents uploading',
            xtype : 'numberfield',
            name : 'seed-queue-size'
        }]
    }]
});
// Download with maximum of:      active transfers
// Seed with maximum of:      active transfers
// Transfer is stalled when inactive for: