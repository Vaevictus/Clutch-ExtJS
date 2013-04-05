Ext.define("Clutch.view.torrent.Tree", {
    extend : 'Ext.tree.Panel',

    title : 'Filters',

    alias : 'widget.torrenttree',

    width : 200,

    rootVisible : false,

    multiSelect : false,

    initComponent : function(cfg) {
        this.root = {
            text : 'Root',
            expanded : true,
            children : [{
                text : 'All',
                filter : 'all',
                leaf : true,
                iconCls : 'tree-all',
                filterFn : this.filterAll
            }, {
                text : 'Downloading',
                filter : 'downloading',
                leaf : true,
                iconCls : 'tree-downloading',
                filterFn : this.filterDownloading
            }, {
                text : 'Completed',
                filter : 'completed',
                leaf : true,
                iconCls : 'tree-completed',
                filterFn : this.filterCompleted
            }, {
                text : 'Paused',
                filter : 'paused',
                leaf : true,
                iconCls : 'tree-paused',
                filterFn : this.filterPaused
            }, {
                text : 'Active',
                filter : 'active',
                leaf : true,
                iconCls : 'tree-active',
                filterFn : this.filterActive
            }, {
                text : 'Inactive',
                filter : 'inactive',
                leaf : true,
                iconCls : 'tree-inactive',
                filterFn : this.filterInactive
            }]
        };
        this.callParent(arguments);
    },

    filterAll : function(record) {
        return true;
    },
    filterDownloading : function(record) {
        var status = record.get('status');
        
        return (status === 3 || status === 4);
    },
    filterCompleted : function(record) {
        var status = record.get('status');
        
        return (status > 4);
    },
    filterPaused : function(record) {
        var status = record.get('status');
        
        return (status < 3);
    },
    filterActive : function(record) {
        //has 0 upload or download speed
        var up = record.get('rateUpload'), down = record.get('rateDownload');
        
        return (up > 0 || down > 0);
    },
    filterInactive : function(record) {
        var up = record.get('rateUpload'), down = record.get('rateDownload');
        
        return (up === 0 || down === 0);
    }
    // typedef enum
    // {
    // TR_STATUS_STOPPED        = 0, /* Torrent is stopped */
    // TR_STATUS_CHECK_WAIT     = 1, /* Queued to check files /*
    // TR_STATUS_CHECK          = 2, /* Checking files */
    // TR_STATUS_DOWNLOAD_WAIT  = 3, /* Queued to download */
    // TR_STATUS_DOWNLOAD       = 4, /* Downloading */
    // TR_STATUS_SEED_WAIT      = 5, /* Queued to seed */
    // TR_STATUS_SEED           = 6  /* Seeding */
    // }

});
