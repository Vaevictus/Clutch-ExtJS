Ext.define('Clutch.controller.SearchController', {

    extend : 'Ext.app.Controller',

    views : ['search.SearchResultGrid'],

    requires : ['Clutch.util.IsoHunt'],

    refs : [{
        ref : 'searchTree',
        selector : 'searchtree'
    }, {
        ref : 'resultsGrid',
        selector : 'searchresultgrid'
    },
    {
        ref : 'detailsPanel',
        selector : 'searchresultdetailspanel'
    }],

    init : function(app) {
        var me = this;

        me.control({
            'searchcontextmenu' : {
                click : me.onContextMenuClick
            },
            'searchresultgrid' : {
                beforeitemcontextmenu : me.onContextMenu,
                afterrender : me.onAfterRender,
                itemdblclick : me.onSearchResultDoubleClick
            },
            'searchtree' : {
                itemclick : me.onTreeNodeClick
            },
            '#searchField' : {
                specialkey : me.onSearchFieldEnterPress
            }
        });
        app.on({
            aftersearch : me.onAfterSearch,
            beforesearch : me.onBeforeSearch,
            searchfail : me.onSearchFail,
            scope : me
        });
    },
    onBeforeSearch : function(searchTerm, category) {
        var me = this, grid = this.getResultsGrid();
        grid.setSearchTerm(searchTerm);
        grid.up('panel').show();
        grid.setLoading(true);

    },
    onAfterSearch : function(searchResults) {
        var searchTree = this.getSearchTree(), resultsGrid = this.getResultsGrid(), cats = [];
        resultsGrid.setLoading(false);

        Ext.each(searchResults, function(res) {
            Ext.Array.include(cats, res.category);
        });
        searchTree.setCategories(cats);
        resultsGrid.setResults(searchResults);

    },
    onSearchFail : function(response) { debugger;
        this.getResultsGrid().setLoading(false);
        Ext.Msg.alert('Error', 'Error performing search: ' + response.error);
    },
    onTreeNodeClick : function(treeview, record, item, index, e, eOpts) {

        var grid = this.getResultsGrid();
        grid.setFilterCat(record.raw.filter);

    },

    onAfterRender : function(gridPanel) {
        gridPanel.contextMenu.gridPanel = gridPanel;
    },

    onSearchResultDoubleClick : function(grid, record, item, index, e, eOpts) {
        //var url = record.get('enclosure_url');
        //this.downloadTorrent(url);
        var grid = this.getResultsGrid(), selection = grid.getSelectionModel().getSelection()[0];
        this.getDetailsPanel().setValue(selection);
    },
    onContextMenu : function(view, record, item, index, e) {
        e.stopEvent();
        var contextMenu = view.up('searchresultgrid').contextMenu;
        contextMenu.showAt(e.getXY());
    },

    onContextMenuClick : function(menu, item, e, eOpts) {

        var grid = menu.gridPanel;

        if (!item) {
            return;
        }

        switch (item.action) {
            case 'download':
                this.downloadSelectedTorrents(grid);
                break;
            case 'view':
                this.openHomeUrl(grid);
                break;
        }
    },
    openHomeUrl: function(grid){
        debugger;
         var selected = grid.getSelectionModel().getSelection()[0];
         if(selected){
             window.open(selected.get('link'));
         }
    },

    onSearchFieldEnterPress : function(field, e) {

        if (e.getKey() === e.ENTER) {
            var searchText = field.getValue();
            Clutch.util.IsoHunt.search(searchText, '');

        }

    },

    downloadSelectedTorrents : function(grid) {
        var selected = grid.getSelectionModel().getSelection();
        Ext.each(selected, function(record) {
            var url = record.get('enclosure_url');
            this.downloadTorrent(url);
        });
    },
    downloadTorrent : function(url) {
        Ext.create("Clutch.view.torrent.AddTorrentDialog", {
            url : url
        }).show();
    }
});
