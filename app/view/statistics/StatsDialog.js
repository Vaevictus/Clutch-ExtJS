Ext.define("Clutch.view.statistics.StatsDialog", {
    
    extend : 'Ext.window.Window',

    controller : 'Clutch.controller.StatsController',
    
    title : 'Statistics',
    
    requires : ['Clutch.view.field.BytesField','Clutch.view.field.TextTimeField','Clutch.view.field.TimestampField'],
       
    alias : 'widget.statsdialog',

    constrain : true,

    config : {
        data : null
    },

    items : [{

        xtype : 'form',
        items : [{
            xtype : 'fieldset',
            title : 'Torrents',
            items : [{
                fieldLabel : 'Active Torrents',
                xtype : 'numberfield',
                itemId : 'activeTorrentCount',
                readOnly : true
            }, {
                fieldLabel : 'Paused Torrents',
                readOnly : true,
                xtype : 'numberfield',
                itemId : 'pausedTorrentCount'
            }, {
                fieldLabel : 'Total Torrents',
                readOnly : true,
                xtype : 'numberfield',
                itemId : 'torrentCount'
            }, {
                fieldLabel : 'Download Speed',
                readOnly : true,
                xtype : 'bytesfield',
                suffix : '/sec',
                itemId : 'downloadSpeed'
            }, {
                fieldLabel : 'Upload Speed',
                readOnly : true,
                xtype : 'bytesfield',
                suffix : '/sec',
                itemId : 'uploadSpeed'
            }]
        }, {
            xtype : 'fieldset',
            title : 'Current Session Stats',
            items : [{
                fieldLabel : 'Uploaded',
                readOnly : true,
                xtype : 'bytesfield',
                itemId : 'c-uploadedBytes'
            }, {
                fieldLabel : 'Downloaded',
                readOnly : true,
                xtype : 'bytesfield',
                itemId : 'c-downloadedBytes'
            }, {
                fieldLabel : 'Torrents Added',
                readOnly : true,
                xtype : 'numberfield',
                itemId : 'c-filesAdded'
            }, {
                fieldLabel : 'Time Active',
                readOnly : true,
                xtype : 'secondsfield',
                itemId : 'c-secondsActive'
            }]
        }, {
            xtype : 'fieldset',
            title : 'Historical Stats',
            items : [{
                fieldLabel : 'Uploaded',
                readOnly : true,
                xtype : 'bytesfield',
                itemId : 'h-uploadedBytes'
            }, {
                fieldLabel : 'Downloaded',
                readOnly : true,
                xtype : 'bytesfield',
                itemId : 'h-downloadedBytes'
            }, {
                fieldLabel : 'Torrents Added',
                readOnly : true,
                xtype : 'numberfield',
                itemId : 'h-filesAdded'
            }, {
                fieldLabel : 'Time Active',
                readOnly : true,
                xtype : 'secondsfield',
                itemId : 'h-secondsActive'
            }]
        }]
    }],

    buttons : [{
        text : 'Close',
        action : 'cancel'
    }],
    constructor : function(config) {
        this.callParent(arguments);
        this.initConfig(config);
    },
    applyData : function(d, oldData) {
        
        this.traverse(d, "", this.processField);
        this.traverse(d["cumulative-stats"], "h-", this.processField);
        this.traverse(d["current-stats"], "c-", this.processField);
        return d;
    },

    processField : function(key, value) {
        var field = this.down('#' + key);
        if (!field)
            return;
        field.setValue(value);
    },

    traverse : function(o, prefix, func) {
        var i = null;
        for (i in o) {
            if (typeof (o[i]) !== "object") {

                func.apply(this, [prefix + i, o[i]]);
            }
        }
    }
});

// Session Statistics
// 529
// 530    Method name: "session-stats"
// 531
// 532    Request arguments: none
// 533
// 534    Response arguments:
// 535
// 536    string                     | value type
// 537    ---------------------------+-------------------------------------------------
// 538    "activeTorrentCount"       | number
// 539    "downloadSpeed"            | number
// 540    "pausedTorrentCount"       | number
// 541    "torrentCount"             | number
// 542    "uploadSpeed"              | number
// 543    ---------------------------+-------------------------------+
// 544    "cumulative-stats"         | object, containing:           |
// 545                               +------------------+------------+
// 546                               | uploadedBytes    | number     | tr_session_stats
// 547                               | downloadedBytes  | number     | tr_session_stats
// 548                               | filesAdded       | number     | tr_session_stats
// 549                               | sessionCount     | number     | tr_session_stats
// 550                               | secondsActive    | number     | tr_session_stats
// 551    ---------------------------+-------------------------------+
// 552    "current-stats"            | object, containing:           |
// 553                               +------------------+------------+
// 554                               | uploadedBytes    | number     | tr_session_stats
// 555                               | downloadedBytes  | number     | tr_session_stats
// 556                               | filesAdded       | number     | tr_session_stats
// 557                               | sessionCount     | number     | tr_session_stats
// 558                               | secondsActive    | number     | tr_session_stats