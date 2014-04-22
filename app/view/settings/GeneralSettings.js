Ext.define('Clutch.view.settings.GeneralSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'General',

    alias : 'widget.generalsettings',

    config : {
        fields : ['start-added-torrents','encryption', 'download-dir','rename-partial-files']
    },

    items : [{
        xtype : 'fieldset',
        title : 'General',
        items : [{
            fieldLabel : 'Download Directory',
            allowBlank : false,
            xtype : 'textfield',
            name : 'download-dir',
            width : 400
        },{
            boxLabel : 'Pause torrents when added',
            xtype : 'checkboxfield',
            name : 'start-added-torrents',
            tooltip : 'Torrents will be paused when added'
        },
        {
            boxLabel : 'Rename partial files',
            xtype : 'checkboxfield',
            name : 'rename-partial-files',
            tooltip : '".part" will be added to incomplete files'
        }]
    }]
});
