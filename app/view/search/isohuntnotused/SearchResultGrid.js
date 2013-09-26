Ext.define('Clutch.view.search.isohunt.SearchResultGrid', {

    extend : 'Clutch.view.search.SearchResultGridBase',

    requires : ['Clutch.view.search.SearchResultGridBase', 'Clutch.view.search.SearchToolbar'],

    store : Ext.create('Clutch.store.SearchResult'),

    title : 'ISOHunt Search Results',

    alias : 'widget.isohuntsearchresultgrid',

    tbar : Ext.create('Clutch.view.search.SearchToolbar', {
        searchEmptyText : 'Search isohunt.com'
    }),

    applySearchTerm : function(searchTerm, oldValue) {

        // TODO FIX Clutch.util.IsoHunt.search(searchTerm, this);
        return this.callParent(arguments);
    }
});

