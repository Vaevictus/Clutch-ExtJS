Ext.define('Clutch.view.statistics.SpeedComponent', {

    extend : 'Ext.container.Container',

    alias : 'widget.speedcomponent',
    
     
    config : {
        speedUp : 0,
        speedDown : 0
    },
    layout : 'hbox',

    items : [{
        xtype : 'menuitem',
        text : 'Down: '
    }, {
        xtype : 'menuitem',
        itemId : 'speeddown',
        //width : 80
    }, {
        xtype : 'menuitem',
        text : 'Up: '
    },{
        xtype : 'menuitem',
        itemId : 'speedup',
        // width : 80
    }],

    constructor : function(cfg) {
        this.callParent(arguments);
        this.initConfig(cfg);
    },

    applySpeedUp : function(v, oldValue) {
        var corrected = Ext.util.Format.fileSize(v);
        if (corrected !== '-') corrected += '/s';
        this.down('#speedup').setText(corrected);
        return v;
    },

    applySpeedDown : function(v, oldValue) {
        var corrected = Ext.util.Format.fileSize(v);
        if (corrected !== '-') corrected += '/s';
        this.down('#speeddown').setText(corrected);
        return v;
    }
});
