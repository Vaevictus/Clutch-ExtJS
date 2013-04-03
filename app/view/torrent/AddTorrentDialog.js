Ext.define("Clutch.view.torrent.AddTorrentDialog", {
    
    extend : 'Ext.window.Window',

    alias : 'widget.addtorrentdialog',
    
    constrain : true, 
    
    closeAction : 'destroy',
    
    config : {
        url : null
    },

    title : 'Add torrent',

    items : [{
        xtype : 'form',
        bodyPadding : '10px',
        items : [{
            xtype : 'textfield',
            itemId : 'url',
            fieldLabel : 'Url',
            allowBlank : false
        }, {
            xtype : 'textfield',
            fieldLabel : 'Save location',
            itemId : 'downloadDirectory'
        }, {
            xtype : 'checkbox',
            fieldLabel : 'Start Paused',
            checked : true,
            itemId : 'startPaused'
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Bandwidth Priority',
            itemId : 'bandwidthPriority'
        }, {
            xtype : 'numberfield',
            fieldLabel : 'Peer Limit',
            itemId : 'peerLimit'
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
        this.down('#url').setValue(newValue);
        return newValue;
    },
    
    getValue : function() {
        var options = {};
        options.url = this.down('#url').getValue();
        options.startPaused = this.down('#startPaused').getValue() === 'checked';
        options.bandwidthPriority = this.down('#bandwidthPriority').getValue();
        options.peerLimit = this.down('#peerLimit').getValue();
        options.downloadDirectory = this.down('#downloadDirectory').getValue();
        
        return options;
        // "filename" : options.url,
                // "paused" : options.startPaused,
                // "bandwidthPriority" : options.bandwidthPriority,
                // "peer-limit" : options.peerLimit,
                // "download-dir" : options.downloadDirectory
    }

});
