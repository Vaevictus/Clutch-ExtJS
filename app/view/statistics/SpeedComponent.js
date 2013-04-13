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
        xtype : 'tbtext',
        text : 'Down: ',
        x : 0
    }, {
        xtype : 'tbtext',
        itemId : 'speeddown',
        x : 50
    }, {
        xtype : 'tbtext',
        text : 'Up: ',
        x : 150
    }, {
        xtype : 'tbtext',
        itemId : 'speedup',
        x : 200
    }, {
        xtype : 'tbtext',
        text : 'Disk free:',
        x : 300
    }, {
        xtype : 'tbtext',
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

        //set up a task to refresh the disk space every 5 minutes
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

    applyDownloadPath : function(path, oldPath) {
        if (!path)
            return '';

        if (path != oldPath) {

            this.refreshDiskSpaceFree(path);
        }

        return path;
    },

    applyFreeSpace : function(bytes, oldValue) {

        var comp = this.down('#diskfree'), niceSize = Ext.util.Format.fileSize (bytes);
        comp.setText(niceSize);
        return niceSize;
    }
});
