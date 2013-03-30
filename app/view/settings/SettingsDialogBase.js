Ext.define('Clutch.view.settings.SettingsDialogBase', {
    extend : 'Ext.window.Window',

    title : 'Settings',

    modal : true,

    width : 500,

    height : 400,

    config : {

        cards : []
    },

    constrain : true,

    border : false,

    frame : false,

    layout : 'border',

    items : [{
        xtype : 'treepanel',
        region : 'west',
        width : 150,
        rootVisible : false,
        root : {
            children : []
        }
    }, {
        xtype : 'panel',
        itemId : 'cardcontainer',
        layout : 'card',
        region : 'center'

    }],

    buttons : [{
        text : 'Save',
        action : 'save'
    }, {
        text : 'Cancel',
        action : 'cancel'
    }],

    constructor : function(config) {
        this.callParent(arguments);
        this.initConfig(config);

    },

    applyCards : function(panels, oldValue) {
        Ext.each(panels, function(panelName) {
            var root = this.down('treepanel').getRootNode(), createdPanel = Ext.createByAlias(panelName, {
                itemId : panelName
            });

            root.appendChild({
                text : createdPanel.title,
                panel : createdPanel
            });
            var cardContainer = this.down('#cardcontainer');
            cardContainer.getLayout().setActiveItem(createdPanel);

        }, this);
        return panels;
    },

    setActiveItem : function(item) {
        this.down('#cardcontainer').getLayout().setActiveItem(item);
    }
});

