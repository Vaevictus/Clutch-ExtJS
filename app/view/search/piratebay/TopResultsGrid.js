Ext.define('Clutch.view.search.piratebay.TopResultsGrid', {

    alias : 'widget.piratebaytopresultsgrid',

    extend : 'Clutch.view.search.SearchResultGridBase',

    store : Ext.create('Clutch.store.SearchResult'),

    title : 'PirateBay Top Torrents',

    applySearchTerm : function(v, oldValue) {
        return v;
    },
    tbar : [],

    loadResults : function() { //TODO I dont like doing this here

        this.setFilterCat('all');
        
        this.setLoading(true);

        PirateBay.Search.getTopResults().then({

            success : function(results) {

                this.getStore().loadRawData(results);
                this.fireEvent('topresultsloaded', results);
            },

            failure : Ext.emptyFn,

            scope : this
        });
    },

    initComponent : function() {
        this.on('afterrender', this.loadResults); //todo no likey
        this.callParent(arguments);
    }
});

