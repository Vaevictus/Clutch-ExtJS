Ext.define('Clutch.view.settings.GeneralSettings', {

    extend : 'Clutch.view.settings.SettingsCardBase',

    title : 'General',

    alias : 'widget.generalsettings',

    config : {
        fields : ['encryption', 'download-dir']
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
        }, {
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

        }]
    }]
});
