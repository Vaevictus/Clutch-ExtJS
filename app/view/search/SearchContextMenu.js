Ext.define('Clutch.view.search.SearchContextMenu', {
    extend : 'Ext.menu.Menu',

    alias : 'widget.searchcontextmenu',

    items : [{
        text : 'Download',
        action : 'download'
    }, {
        text : 'View source page',
        action : 'view'
    }]
});
