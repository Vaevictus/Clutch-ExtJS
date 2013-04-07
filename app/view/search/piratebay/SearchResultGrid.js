Ext.define('Clutch.view.search.piratebay.SearchResultGrid', {
    extend : 'Clutch.view.search.SearchResultGridBase',

    store : Ext.create('Clutch.store.SearchResult'),

    title : 'PirateBay Search Results',

    alias : 'widget.piratebaysearchresultgrid',

    contextMenu : Ext.create('Clutch.view.search.SearchContextMenu'),

    columns : [{
        header : 'Name',
        flex : 1,
        dataIndex : 'name'
    }, {
        header : 'Seeds',
        width : 50,
        dataIndex : 'seeds'
    }, {
        header : 'Leechers',
        width : 50,
        dataIndex : 'leechers'
    }, {
        header : 'Size',
        dataIndex : 'size',
        xtype : 'sizecolumn'
    }, {
        header : 'Date Added',
        xtype : 'datecolumn',
        dataIndex : 'pubDate',
        format : 'F j, Y, g:i a'
    }, {
        header : 'Category',
        dataIndex : 'category',
        flex : 1
    }],
    
    tbar : [{
        xtype : 'searchfield',
        emptyText : 'Search The Pirate Bay',
        width : 200
    }],
    
    applySearchTerm: function (v, oldValue){
        
        Clutch.util.PirateBay.search(v, this);
        return this.callParent(arguments);
    }
});

