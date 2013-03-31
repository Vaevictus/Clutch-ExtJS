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

});
