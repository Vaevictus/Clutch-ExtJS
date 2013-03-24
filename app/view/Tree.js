Ext.define("Clutch.view.Tree", {
    extend : 'Ext.tree.Panel',

    title: 'Torrents',
    
    alias : 'widget.torrenttree',

    width : 200,

    rootVisible : false,

    multiSelect : false,

    root : {
        text : 'Root',
        expanded : true,
        children : [{
            text : 'All',
            leaf : true,
            iconCls : 'tree-all'
        }, {
            text : 'Downloading',
            leaf : true,
            iconCls : 'tree-downloading'
        }, {
            text : 'Completed',
            leaf : true,
            iconCls : 'tree-completed'
        },{
            text : 'Paused',
            leaf : true,
            iconCls : 'tree-paused'
        }, {
            text : 'Active',
            leaf : true,
            iconCls : 'tree-active'
        }, {
            text : 'Inactive',
            leaf : true,
            iconCls : 'tree-inactive'
        }]
    }

});
