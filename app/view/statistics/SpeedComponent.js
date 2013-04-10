Ext.define('Clutch.view.statistics.SpeedComponent', {

    extend : 'Ext.container.Container',

    alias : 'widget.speedcomponent',

    config : {
        speedUp : 0,
        speedDown : 0
    },
    layout : 'absolute',

    items : [{
        xtype : 'menuitem',
        text : 'Down: ',
        x : 0
    }, {
        xtype : 'menuitem',
        itemId : 'speeddown',
        x : 50
    }, {
        xtype : 'menuitem',
        text : 'Up: ',
        x : 150
    }, {
        xtype : 'menuitem',
        itemId : 'speedup',
        x : 200
    }, {
        xtype : 'tbspacer',
        x : 300,
        width : 50
    }],

    constructor : function(cfg) {
        this.callParent(arguments);
        this.initConfig(cfg);
    },

    applySpeedUp : function(v, oldValue) {
        var corrected = Ext.util.Format.fileSize(v);
        if (corrected !== '-')
            corrected += '/s';
        this.down('#speedup').setText(corrected);
        return v;
    },

    applySpeedDown : function(v, oldValue) {
        var corrected = Ext.util.Format.fileSize(v);
        if (corrected !== '-')
            corrected += '/s';
        this.down('#speeddown').setText(corrected);
        return v;
    }
});
