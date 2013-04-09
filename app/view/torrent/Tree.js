Ext.define('Clutch.view.torrent.Tree', {
    extend : 'Ext.tree.Panel',

    title : 'Filters',

    alias : 'widget.torrenttree',

    config : {
        torrents : [],
        downloadingCount : 0,
        completedCount : 0,
        activeCount : 0,
        inactiveCount : 0,
        totalCount : 0,
        pausedCount : 0
    },
    
    viewConfig : {
      markDirty : false  
    },

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

        return (up === 0 && down === 0);
    },
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

    applyTorrents : function(torrents, oldValue) { debugger;
        var downloadingCount = 0, completedCount = 0, pausedCount = 0, activeCount = 0, inactiveCount = 0, totalCount = torrents.length;

        Ext.each(torrents, function(t) {
            switch(t.status) {
                case 0:
                    pausedCount = pausedCount + 1;
                    break;
                case 3:
                case 4:
                    downloadingCount = downloadingCount + 1;
                    break;
                case 5:
                case 6:
                    completedCount = completedCount + 1;
                    break;
            }
            if (t.rateUpload === 0 && t.dateDownload === 0) {
                inactiveCount = inactiveCount + 1;
            } else {
                activeCount = activeCount + 1;
            }
        }, this);
        this.suspendLayouts();

        this.setDownloadingCount(downloadingCount);
        this.setCompletedCount(completedCount);
        this.setPausedCount(pausedCount);
        this.setActiveCount(activeCount);
        this.setInactiveCount(inactiveCount);
        this.setTotalCount(totalCount);
        this.resumeLayouts();

        return torrents;
    },

    applyDownloadingCount : function(v, oldValue) {
        this.getRootNode().findChild('iconCls', 'tree-downloading').set('text', Ext.String.format('Downloading ({0})', v));
        return v;
    },
    applyCompletedCount : function(v, oldValue) {
        this.getRootNode().findChild('iconCls', 'tree-completed').set('text', Ext.String.format('Completed ({0})', v));
        return v;
    },
    applyActiveCount : function(v, oldValue) {
        this.getRootNode().findChild('iconCls', 'tree-active').set('text', Ext.String.format('Active ({0})', v));
        return v;
    },
      applyInactiveCount : function(v, oldValue) {
        this.getRootNode().findChild('iconCls', 'tree-inactive').set('text', Ext.String.format('Inactive ({0})', v));
        return v;
    },
    applyPausedCount : function(v, oldValue) {
        this.getRootNode().findChild('iconCls', 'tree-paused').set('text', Ext.String.format('Paused ({0})', v));
        return v;
    },
    applyTotalCount : function(v, oldValue) {
        this.getRootNode().findChild('iconCls', 'tree-all').set('text', Ext.String.format('All ({0})', v));
        return v;
    }
});
