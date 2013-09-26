Ext.define("Clutch.view.search.SearchResultGridBase", {
    extend : 'Ext.grid.Panel',

    requires : ['Clutch.view.column.SizeColumn'],

    store : Ext.create('Clutch.store.SearchResult'),

    title : 'Search Results',

    config : {

        results : null,

        searchTerm : null,

        filterCat : 'all'
    },

    viewConfig : {

        emptyText : 'No results',

        stripeRows : true,

        deferEmptyText : false
    },

    alias : 'widget.searchresultgridbase',

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
        width : 200,
        format : 'F j, Y, g:i a'
    }, {
        header : 'Downloads',
        dataIndex : 'downloads'
    }, {
        header : 'Category',
        dataIndex : 'category'
    }, {
        header : 'Comments',
        dataIndex : 'comments',
        flex : 1
    }],

    constructor : function(cfg) {
        this.callParent(arguments);
        
        this.getView().selModel = Ext.create('Ext.selection.RowModel', {
            mode : 'MULTI'
        });
        this.contextMenu = Ext.create('Clutch.view.search.SearchContextMenu', { gridPanel : this });
        
        this.initConfig(cfg);
    },

    applyResults : function(newValue, oldValue) {

        this.store.loadRawData(newValue);
        //must use loadRawData here as loadData does not supporting mapping in the fields which we need for other ext bugs
        return newValue;
    },

    applyFilterCat : function(cat, oldCat) {

        this.store.clearFilter(false);

        if (cat !== 'all') {

            this.store.filter('category', cat, true, true);

        }

        return cat;
    },

    applySearchTerm : function(s, oldValue) {

        this.setTitle('Search Results: ' + s);

        return s;
    },

    downloadSelectedTorrents : function() {

        var selected = this.getView().getSelectionModel().getSelection();

        Ext.each(selected, function(record) {

            var url = record.get('torrentLink');

            this.downloadTorrent(url);

        }, this);
    },
    
    downloadTorrent : function(url) {
    
        Ext.create("Clutch.view.torrent.AddTorrentDialog", {
            url : url
        }).show();
    
    },
    
    openTorrentUrl : function() {

        var selected = this.getView().getSelectionModel().getSelection();

        if (selected.length < 1) {
            return;
        }

        window.open(selected[0].get('summaryLink'))
    },
    
    showMovieInfo : function() {

        var selected = this.getView().getSelectionModel().getSelection(), detailsPanel = this.up('panel').down('searchresultdetailspanel'), movieInfoPanel = detailsPanel.down('movieinfo');

        if (selected.length < 1) {
            return;
        }
        
        detailsPanel.expand();
        
        movieInfoPanel.show();
        
        movieInfoPanel.setTorrentSearchResult(selected[0]);
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
