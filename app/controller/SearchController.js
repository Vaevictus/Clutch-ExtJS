Ext.define('Clutch.controller.SearchController', {

    extend : 'Ext.app.Controller',

    //views : ['search.SearchResultGrid'],

    requires : ['Clutch.util.IsoHunt', 'Clutch.util.PirateBay', 'Clutch.util.Harmoniser'],

    init : function(app) {
        var me = this;

        me.control({
            'searchcontextmenu' : {
                click : me.onContextMenuClick
            },
            'searchresultgrid' : {
                beforeitemcontextmenu : me.onContextMenu,
                afterrender : me.onAfterRender,
                itemdblclick : me.onSearchResultDoubleClick,
                itemclick : me.onSearchResultSingleClick
            },
            'searchtree' : {
                itemclick : me.onTreeNodeClick
            },
            'searchfield' : {
                specialkey : me.onSearchFieldEnterPress
            },
            'commentsgrid' : {
                show : me.onCommentsGridShow
            },
            'piratebaytopresultsgrid' : {
                afterrender : me.onAfterRenderPirateBayTop
            }
        });
        app.on({
            aftersearch : me.onAfterSearch,
            beforesearch : me.onBeforeSearch,
            searchfail : me.onSearchFail,
            scope : me
        });
    },
    onAfterRenderPirateBayTop : function(topGrid) {
        topGrid.loadResults();
    },
    onCommentsGridShow : function(commentsGrid) {
        var url = commentsGrid.getValue();
        commentsGrid.loadComments(url);
    },

    onBeforeSearch : function(searchTerm, grid) {

        grid.setLoading(true);

    },
    onAfterSearch : function(searchResults, grid) {
        var searchTree = grid.up('panel').down('searchtree'), cats = [];
        grid.setLoading(false);

        Ext.each(searchResults, function(res) {
            Ext.Array.include(cats, res.category);
        });
        searchTree.setCategories(cats);
        grid.setResults(searchResults);

    },
    onSearchFail : function(response, grid) {
        grid.setLoading(false);
        Ext.Msg.alert('Error', 'Error performing search: ' + response.error);
    },
    onTreeNodeClick : function(treeview, record, item, index, e, eOpts) { debugger;
        var grid = treeview.up('panel').up('panel').down('searchresultgrid');
        grid.setFilterCat(record.raw.filter);

    },

    onAfterRender : function(gridPanel) {
        gridPanel.contextMenu.gridPanel = gridPanel;
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
    openHomeUrl : function(grid) { debugger;
        var selected = grid.getSelectionModel().getSelection()[0];
        if (selected) {
            window.open(selected.get('link'));
        }
    },

    onSearchFieldEnterPress : function(field, e) { debugger;

        if (e.getKey() === e.ENTER) {

            var grid = field.up('gridpanel');
            grid.setSearchTerm(field.getValue());

        }

    },

    downloadSelectedTorrents : function(grid) {
        var selected = grid.getSelectionModel().getSelection();
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

    onSearchResultSingleClick : function(view, record, item, index, e, eOpts) {
        var grid = view.up('gridpanel'), detailsPanel = grid.up('panel').down('searchresultdetailspanel');
        // selection = grid.getSelectionModel().getSelection()[0];
        //detailsPanel.expand();
        detailsPanel.setValue(record);
    },

    onSearchResultDoubleClick : function(view, record, item, index, e, eOpts) { debugger;
        var url = record.get('torrentLink'), detailsPanel = view.up('gridpanel').up('panel').down('searchresultdetailspanel');
        detailsPanel.expand();
        // this.downloadTorrent(url);

    }
});
