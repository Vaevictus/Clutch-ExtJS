Ext.define('Clutch.view.search.SearchContextMenu', {
    extend : 'Ext.menu.Menu',

    alias : 'widget.searchcontextmenu',

    items : [{
        text : 'Download',
        action : 'download',
        iconCls : 'tree-downloading'
    }, {
        text : 'View source page',
        action : 'view'
    }]
});
