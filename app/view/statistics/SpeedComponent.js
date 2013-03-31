Ext.define('Clutch.view.statistics.SpeedComponent', {

    extend : 'Ext.container.Container',

    alias : 'widget.speedcomponent',

    config : {
        speedUp : 0,
        speedDown : 0
    },
    layout : 'hbox',

    items : [{
        xtype : 'text',
        text : 'Down: '
    }, {
        xtype : 'tbspacer',
        width : 2
    },{
        xtype : 'text',
        itemId : 'speeddown',
        width : 80
    }, {
        xtype : 'tbspacer',
        width : 10
    }, {
        xtype : 'text',
        text : 'Up: '
    }, {
        xtype : 'tbspacer',
        width : 2
    },{
        xtype : 'text',
        itemId : 'speedup',
         width : 80
    }],

    constructor : function(cfg) {
        this.callParent(arguments);
        this.initConfig(cfg);
    },

    applySpeedUp : function(v, oldValue) {
        var corrected = Ext.util.Format.fileSize(v);
        this.down('#speedup').setText(corrected);
        return v;
    },

    applySpeedDown : function(v, oldValue) {
        var corrected = Ext.util.Format.fileSize(v);
        this.down('#speeddown').setText(corrected);
        return v;
    }
});
