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
            leaf : true
        }, {
            text : 'Downloading',
            leaf : true
        }, {
            text : 'Completed',
            leaf : true
        }, {
            text : 'Active',
            leaf : true
        }, {
            text : 'Inactive',
            leaf : true
        }]
    }

});
