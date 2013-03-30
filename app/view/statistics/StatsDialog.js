Ext.define("Clutch.view.statistics.StatsDialog", {
    extend : 'Ext.window.Window',

    title : 'Statistics',

    alias : 'widget.statsdialog',

    constrain : true,
    
    items : [{

        xtype : 'form',
        items : [{
            xtype : 'fieldset',
            title : 'Torrents',
            items : [{
                fieldLabel : 'Active Torrents',
                xtype : 'numberfield',
                readOnly : true
            }, {
                fieldLabel : 'Paused Torrents',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Total Torrents',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Download Speed',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Upload Speed',
                readOnly : true,
                xtype : 'numberfield'
            }]
        }, {
            xtype : 'fieldset',
            title : 'Current Session Stats',
            items : [{
                fieldLabel : 'Uploaded',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Downloaded',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Torrents Added',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Time Active',
                readOnly : true,
                xtype : 'numberfield'
            }]
        }, {
            xtype : 'fieldset',
            title : 'Historical Stats',
            items : [{
                fieldLabel : 'Uploaded',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Downloaded',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Torrents Added',
                readOnly : true,
                xtype : 'numberfield'
            }, {
                fieldLabel : 'Time Active',
                readOnly : true,
                xtype : 'numberfield'
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