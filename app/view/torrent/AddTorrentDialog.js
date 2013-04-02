Ext.define("Clutch.view.torrent.AddTorrentDialog", {
    
    extend : 'Ext.window.Window',

    alias : 'widget.addtorrentdialog',
    
    constrain : true, 
    
    config : {
        url : null
    },

    title : 'Add torrent',

    items : [{
        xtype : 'form',
        bodyPadding : '10px',
        items : [{
            xtype : 'textfield',
            fieldLabel : 'Url',
            allowBlank : false
        }, {
            xtype : 'textfield',
            fieldLabel : 'Save location'
        }, {
            xtype : 'checkbox',
            fieldLabel : 'Start Paused',
            checked : true
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Bandwidth Priority'
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Peer Limit'
        }]
    }],
    
    buttons : [{
        text : 'OK',
        action : 'add-torrent'
    },
    {
        text : 'Cancel',
        action : 'cancel'
    }],
    
    constructor: function (cfg) {
      this.callParent(arguments);
      this.initConfig(cfg);  
    },
    
    applyUrl : function (newValue, oldValue) {
        this.down('textfield[fieldLabel=Url]').setValue(newValue);
        return newValue;
    }

});
