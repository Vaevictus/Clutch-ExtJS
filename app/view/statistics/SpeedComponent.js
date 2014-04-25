Ext.define('Clutch.view.statistics.SpeedComponent', {

    extend : 'Ext.container.Container',

    alias : 'widget.speedcomponent',

    config : {
        speedUp : 0,
        speedDown : 0,
        freeSpace : 0
    },
    layout : 'absolute',

    items : [{
        xtype : 'menuitem',
        text : 'Down: ',
		iconCls : 'speeddown',
        x : 0
    }, {
        xtype : 'menuitem',
        itemId : 'speeddown',
        x : 50
    }, {
        xtype : 'menuitem',
        text : 'Up: ',
		iconCls : 'speedup',
        x : 150
    }, {
        xtype : 'menuitem',
        itemId : 'speedup',
        x : 200
    }, {
        xtype : 'menuitem',
		iconCls : 'diskfree',
        text : 'Disk free:',
        x : 300
    }, {
        xtype : 'menuitem',
        itemId : 'diskfree',
        x : 380
    }, {
        xtype : 'tbspacer',
        x : 450,
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
    },

   
    applyFreeSpace : function(bytes, oldValue) {
        
        var comp = this.down('#diskfree'), niceSize = Ext.util.Format.fileSize (bytes);
        comp.setText(niceSize);
        return niceSize;
    }
});
