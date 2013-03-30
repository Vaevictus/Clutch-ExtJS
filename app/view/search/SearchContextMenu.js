Ext.define('Clutch.view.search.SearchContextMenu', {
    extend : 'Ext.menu.Menu',

    alias : 'widget.searchcontextmenu',

    items : [{
        text : 'Download',
        action : 'download'
    }, {
        text : 'View comments',
        action : 'pause'
    }, {
        text : 'View source page',
        action : 'pause'
    }, {
        text : 'Remove from results list',
        action : 'remove'
    }]
});
