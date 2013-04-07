Ext.define('Clutch.view.search.isohunt.SearchResultGrid', {

    extend : 'Clutch.view.search.SearchResultGridBase',

    requires : ['Clutch.view.search.SearchResultGridBase'],

    store : Ext.create('Clutch.store.SearchResult'),

    title : 'ISOHunt Search Results',

    alias : 'widget.isohuntsearchresultgrid',

    tbar : [{
        xtype : 'searchfield',
        emptyText : 'Search isohunt.com',
        width : 200
    }],

    applySearchTerm : function(searchTerm, oldValue) {

        Clutch.util.IsoHunt.search(searchTerm, this);
        return this.callParent(arguments);
    }
});

