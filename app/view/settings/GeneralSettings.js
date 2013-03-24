Ext.define('Clutch.view.settings.GeneralSettings', {
    extend : 'Ext.form.FormPanel',

    //layout : 'form',

    title : 'General',

    alias : 'widget.generalsettings',

    items : [
    {
        xtype: 'fieldset',
        title : 'General',
        items: [{
        fieldLabel : 'Download Directory',
        allowBlank: false,
        xtype : 'textfield'
    },
    {
        fieldLabel : 'Encryption',
        xtype: 'combo'
    },
    {
        fieldLabel : 'Theme',
        xtype: 'combo'
    }]
    }
    
    ]
});
