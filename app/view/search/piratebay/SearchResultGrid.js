Ext.define('Clutch.view.search.piratebay.SearchResultGrid', {

    alias : 'widget.piratebaysearchresultgrid',

    extend : 'Clutch.view.search.SearchResultGridBase',

    requires : ['Clutch.view.search.SearchToolbar'],

    store : Ext.create('Clutch.store.SearchResult'),

    columns : [{
        header : 'Name',
        flex : 1,
        dataIndex : 'name'
    }, {
        header : 'Seeds',
        width : 70,
        dataIndex : 'seeds'
    }, {
        header : 'Leechers',
        width : 70,
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


    applySearchTerm : function(v, oldValue) {

        PirateBay.Search.search(v, this);
        return this.callParent(arguments);
    }
});

