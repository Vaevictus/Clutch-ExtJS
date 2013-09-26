Ext.define("Clutch.view.torrent.AddTorrentDialog", {

    extend : 'Ext.window.Window',

    alias : 'widget.addtorrentdialog',

    inject : 'rpcService',

    constrain : true,

    closeAction : 'destroy',

    config : {
        url : null,

        rpcService : null
    },

    title : 'Add torrent',

    items : [{
        xtype : 'form',
        bodyPadding : '10px',
        items : [{
            xtype : 'textareafield',
            itemId : 'url',
            allowBlank : false,
            name : 'filename',
            fieldLabel : 'Url',
            allowBlank : false,
            width : 400
        }, {
            allowBlank : false,
            xtype : 'textfield',
            fieldLabel : 'Save location',
            itemId : 'download-dir',
            name : 'download-dir',
            width : 400
        }, {
            xtype : 'checkbox',
            fieldLabel : 'Start Paused',
            checked : true,
            itemId : 'start-added-torrents',
            name : 'start-added-torrents'
        }, {
            allowBlank : false,
            xtype : 'numberfield',
            fieldLabel : 'Bandwidth Priority',
            itemId : 'bandwidthPriority',
            name : 'bandwidthPriority',
            minValue : 1,
            value : 1,
            width : 400
        }, {
            allowBlank : false,
            xtype : 'numberfield',
            fieldLabel : 'Peer Limit',
            name : 'peer-limit',
            itemId : 'peer-limit-per-torrent',
            minValue : 0,
            maxValue : 1024,
            width : 400

        }]
    }],

    buttons : [{
        itemId : 'btnOK',
        text : 'OK',
        action : 'add-torrent'
    }, {
        itemId : 'btnCancel',
        text : 'Cancel',
        action : 'cancel'
    }],

    constructor : function(cfg) {
        this.callParent(arguments);
        this.initConfig(cfg);
    },

    applyUrl : function(newValue, oldValue) {
        
        this.down('#url').setValue(newValue);
        return newValue;
    },

    getValue : function() {

        var options = this.down('form').getValues();
        options['paused'] = options['start-added-torrents'] === 'on' ? true : false;

        return options;
        // "filename" : options.url,
        // "paused" : options.startPaused,
        // "bandwidthPriority" : options.bandwidthPriority,
        // "peer-limit" : options.peerLimit,
        // "download-dir" : options.downloadDirectory
    },

    show : function() {

        this.callParent(arguments);
        
        this.down('#btnOK').on('click', this.onBtnOKClick, this);
         this.down('#btnCancel').on('click', this.onBtnCancelClick, this);
        
        this.getRpcService().getInitialSettings().then({
            
            success : function(rpcResponse) {
                
                var settings = rpcResponse.arguments;
                
                this.down('#start-added-torrents').setValue(settings['start-added-torrents']);
                this.down('#peer-limit-per-torrent').setValue(settings['peer-limit-per-torrent']);
                this.down('#download-dir').setValue(settings['download-dir']);
            },
            scope : this
        });

    },
    
    onBtnOKClick : function(btn){
      this.addTorrent();  
    },
    onBtnCancelClick : function(btn){
      this.destroy();  
    },

    addTorrent : function() {

        var form = this.down('form');

        if (form.isValid() === false) {
            return;
        }

        var options = this.getValue();

        this.getRpcService().addTorrent(options);

        this.close();
    }
});
