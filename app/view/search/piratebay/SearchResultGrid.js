Ext.define('Clutch.view.search.piratebay.SearchResultGrid', {
    
    alias : 'widget.piratebaysearchresultgrid',
    
    extend : 'Clutch.view.search.SearchResultGridBase',

    requires : ['Clutch.view.search.SearchToolbar'],
    
    store : Ext.create('Clutch.store.SearchResult'),

    title : 'PirateBay Search Results',

    contextMenu : Ext.create('Clutch.view.search.SearchContextMenu'),

    columns : [{
        header : 'Name',
        flex : 1,
        dataIndex : 'name'
    }, {
        header : 'Seeds',
        width : 60,
        dataIndex : 'seeds'
    }, {
        header : 'Leechers',
        width : 65,
        dataIndex : 'leechers'
    }, {
        header : 'Size',
        dataIndex : 'size',
        xtype : 'sizecolumn'
    }, {
        header : 'Date Added',
        xtype : 'datecolumn',
        dataIndex : 'pubDate',
        format : 'F j, Y, g:i a',
        width : 200
    }, {
        header : 'Category',
        dataIndex : 'category',
        flex : 1
    }],
    
    tbar : Ext.create('Clutch.view.search.SearchToolbar', {
        searchEmptyText : 'Search The Pirate Bay'
    }),
    
    applySearchTerm: function (v, oldValue){
        
        Clutch.util.PirateBay.search(v, this);
        return this.callParent(arguments);
    }
});

