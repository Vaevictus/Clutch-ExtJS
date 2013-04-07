Ext.define('Clutch.view.search.SearchTree', {
    extend : 'Ext.tree.Panel',

    title : 'Search Filters',

    collapsible : true,

    split : true,

    config : {
        categories : []
    },
    alias : 'widget.searchtree',

    width : 200,

    rootVisible : false,

    multiSelect : false,

    root : {},

    applyCategories : function(cats, oldCats) {
        var root = this.getRootNode();

        root.removeAll();

        root.appendChild({
            text : 'All',
            filter : 'all',
            leaf : true
            //iconCls : 'tree-downloading'
        });
        Ext.each(cats, function(category) {
            root.appendChild({
                text : category,
                filter : category,
                leaf : true
                //iconCls : 'tree-downloading'
            });
        }, this);
    }});
