Ext.define("Clutch.view.Tree", {
    extend : 'Ext.tree.Panel',

    title: 'Filters',
    
    alias : 'widget.torrenttree',

    width : 200,

    rootVisible : false,

    multiSelect : false,

    root : {
        text : 'Root',
        expanded : true,
        children : [{
            text : 'All',
            filter: 'all',
            leaf : true,
            iconCls : 'tree-all'
        }, {
            text : 'Downloading',
            filter: 'downloading',
            leaf : true,
            iconCls : 'tree-downloading'
        }, {
            text : 'Completed',
            filter: 'completed',
            leaf : true,
            iconCls : 'tree-completed'
        },{
            text : 'Paused',
            filter: 'paused',
            leaf : true,
            iconCls : 'tree-paused'
        }, {
            text : 'Active',
            filter: 'active',
            leaf : true,
            iconCls : 'tree-active'
        }, {
            text : 'Inactive',
            filter: 'inactive',
            leaf : true,
            iconCls : 'tree-inactive'
        }]
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
