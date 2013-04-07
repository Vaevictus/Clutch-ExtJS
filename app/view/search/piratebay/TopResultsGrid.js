Ext.define('Clutch.view.search.piratebay.TopResultsGrid', {
    extend : 'Clutch.view.search.piratebay.SearchResultGrid',

    store : Ext.create('Clutch.store.SearchResult'),

    title : 'PirateBay Top Torrents',

    alias : 'widget.piratebaytopresultsgrid',

    applySearchTerm : function(v, oldValue) {
        debugger;
        return v;
    },
    tbar : [],
    
    loadResults : function() {
        Clutch.util.PirateBay.getTopResults(this);
    }
    
});

