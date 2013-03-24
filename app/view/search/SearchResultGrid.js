Ext.define("Clutch.view.search.SearchResultGrid", {
    extend : 'Ext.grid.Panel',

    //requires : ['Clutch.view.search.SearchContextMenu'],

    store : 'SearchResult',

    config : {
        results : null,
        searchTerm : null
    },

    alias : 'widget.searchresultgrid',

    //contextMenu : Ext.create('Clutch.view.TorrentContextMenu', {}),

    columns : [{
        header : 'Name',
        flex : 1,
        dataIndex : 'title'
    }, {
        header : 'Seeds',
        width : 50,
        dataIndex : 'Seeds'
    }, {
        header : 'Peers',
        width : 50,
        dataIndex : 'leechers'
    }, {
        header : 'Size',
        flex : 1,
        dataIndex : 'length',
        renderer : function(v, m, r) {
            var value = Ext.util.Format.fileSize(v);
            return value;
        }
    }],
    selModel : new Ext.selection.RowModel({
        mode : 'MULTI'
    }),

    tbar : ['Search', {
        xtype : 'textfield',
        itemId: 'searchField',
        emptyText : 'Search isohunt.com'
    }, {
        text : 'Go'
    }],

    applyResults : function(newValue, oldValue) {
        //newValue is data from the transmission-daemon and is unfiltered
        //filter the data here against this.getFilter() before loading the data into the store
        // var filter = this.getFilter(), filteredData = [];
        // switch (filter) {
            // case 'all':
                // filteredData = newValue;
                // break;
        // }
        this.setLoading(false);
        this.store.loadData(newValue);
    },

    applySearchTerm : function(newValue, oldValue) {

        var proxy = 'http://query.yahooapis.com/v1/public/yql?{0}', test = {
            q : Ext.String.format('select * from json where url="http://isohunt.com/js/json.php?ihq={0}"',newValue),
            format : 'json'
        }, encodedQuery = Ext.Object.toQueryString(test);
       var url = Ext.String.format(proxy, encodedQuery);
     
       Ext.data.JsonP.request({
            url : url,
            //method: 'GET',
            success : function(response) {
               
               var results = response.query.results.json.items.list;
               this.setResults(results);

            },
            scope : this,

            failure : function(response) {
               this.setLoading(false);
               alert('Failed to get results')
            }
        });
       

    }
});
