Ext.define("Clutch.view.search.SearchResultGrid", {
    extend : 'Ext.grid.Panel',

    requires : ['Clutch.view.column.SizeColumn'],

    store : 'SearchResult',

    config : {
        results : null,
        searchTerm : null
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
    },{
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
        debugger;
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
                var results = response.query.results.json.items.list;
                this.setResults(results);

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
