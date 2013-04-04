Ext.define("Clutch.view.search.SearchResultGrid", {
    extend : 'Ext.grid.Panel',

    requires : ['Clutch.view.column.SizeColumn'],

    store : 'SearchResult',

    config : {
        results : null,
        searchTerm : null
    },
    viewConfig : {
        emptyText : 'No results',
        stripeRows: true

    },

    alias : 'widget.searchresultgrid',

    contextMenu : Ext.create('Clutch.view.search.SearchContextMenu'),

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
        dataIndex : 'length',
        xtype : 'sizecolumn'
    }, {
        header : 'Date Added',
        flex : 1,
        xtype : 'datecolumn',
        dataIndex : 'pubDate',
        format : 'F j, Y, g:i a'
    }],
    selModel : new Ext.selection.RowModel({
        mode : 'MULTI'
    }),

    applyResults : function(newValue, oldValue) { 
        this.store.loadData(newValue);
        return newValue;
    },

    applySearchTerm : function(newValue, oldValue) {

        newValue = encodeURIComponent(newValue);
        var proxy = 'http://query.yahooapis.com/v1/public/yql?&q={0}&format=json', q = encodeURIComponent(Ext.String.format('select * from json where url="http://isohunt.com/js/json.php?ihq={0}"', newValue));

        var url = Ext.String.format(proxy, q);

        this.show();
        this.setLoading(true);

        Ext.data.JsonP.request({
            url : url,

            success : function(response) {
                this.setLoading(false);
                var YQLResultObject = response.query.results.json;
                if (YQLResultObject.total_results > 0) {
                    var searchResults = response.query.results.json.items.list;
                    this.setResults(searchResults);
                } else {
                    this.setResults([]);
                }

            },
            scope : this,

            failure : function(response) {
                this.setLoading(false);
                alert('Failed to get results')
            }
        });
        return newValue;
    }
});
/*
var example_query_with_no_results = {
    "query" : {
        "count" : 1,
        "created" : "2013-04-03T17:27:22Z",
        "lang" : "en-US",
        "results" : {
            "json" : {
                "title" : "isoHunt > All > whhhrr",
                "link" : "http://isohunt.com",
                "description" : "BitTorrent Search > All > whhhrr",
                "language" : "en-us",
                "category" : "All",
                "max_results" : "1000",
                "ttl" : "15",
                "image" : {
                    "title" : "isoHunt > All > whhhrr",
                    "url" : "http://isohunt.com/img/buttons/isohunt-02.gif",
                    "link" : "http://isohunt.com/",
                    "width" : "157",
                    "height" : "45"
                },
                "lastBuildDate" : "Wed, 03 Apr 2013 17:26:29 GMT",
                "pubDate" : "Wed, 03 Apr 2013 17:26:29 GMT",
                "total_results" : "0",
                "censored" : "0"
            }
        }
    }
}; */
