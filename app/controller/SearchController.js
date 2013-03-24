Ext.define('Clutch.controller.SearchController', {

    extend : 'Ext.app.Controller',

    views : ['search.SearchResultGrid'],

    init : function(app) {
        var me = this;

        me.control({

            'searchresultgrid button' : {
                click : me.doSearch
            }
        });
        app.on({

            statsreceived : me.onStatsReceived

        });
    },

    doSearch : function(btn) {
        var searchText = btn.up('searchresultgrid').down('#searchField').getValue(),
            grid = btn.up('searchresultgrid');
            grid.setLoading(true);
            grid.setSearchTerm(searchText);
        
        
    },

    onStatsReceived : function(data) {
        //alert('from the other contorller');
    }
});
