Ext.define('Clutch.controller.SearchController', {

    extend : 'Ext.app.Controller',

    
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
            'searchresultgrid searchtoolbarbase searchfield' : {
                specialkey : me.onSearchFieldEnterPress
            },
            'searchresultgrid searchtoolbarbase #gobutton' : {
                click : me.onSearchGoButtonClick
            },
            'searchresultgrid searchtoolbarbase #downloadselected' : {
                click : me.onDownloadSelectedClick
            },
            'searchtree' : {
                itemclick : me.onTreeNodeClick
            },

            'commentsgrid' : {
                show : me.onCommentsGridShow
            },
            'piratebaytopresultsgrid' : {
                afterrender : me.onAfterRenderPirateBayTop
            },
            'movieinfo gridpanel' : {
                select : me.onMovieResultChange
            },
            'movieinfo toolbar button[action=go]' : {
                click : me.onManualMovieSearchClick
            },
            'movieinfo toolbar #moviesearchtext' : {
                specialkey : me.onMovieTextFieldSpecialKey
            },
            'movieinfo toolbar button[action=viewimdblink]' : {
                click : me.onViewImdbClick
            },
             'movieinfo toolbar button[action=viewrtlink]' : {
                click : me.onViewRtClick
            }
        });
        app.on({
            aftersearch : me.onAfterSearch,
            beforesearch : me.onBeforeSearch,
            searchfail : me.onSearchFail,
            scope : me
        });
    },
    onMovieTextFieldSpecialKey : function(field, e) {

        if (e.getKey() === e.ENTER) {

            var grid = field.up('movieinfo');
            
            grid.doManualSearch();

        }
    },
    
    onDownloadSelectedClick : function(btn){
        debugger;
        var grid = btn.up('searchresultgrid');
        
        grid.downloadSelectedTorrents();
        
    },
    
    onViewImdbClick : function(btn){
        
      btn.up('movieinfo').openIMDB();  
    
    },
    
    onViewRtClick : function(btn){
        
      btn.up('movieinfo').openRottenTomatoes();  
    
    },

    onManualMovieSearchClick : function(btn) {

        var moviePanel = btn.up('movieinfo');

        moviePanel.doManualSearch();
    },
    
    onMovieResultChange : function(sm, record, item, index, e, eOpts) {

        debugger;
        
        var panel = sm.view.ownerCt.up('movieinfo');

        panel.loadRecord(record);

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
    
    onTreeNodeClick : function(treeview, record, item, index, e, eOpts) {

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
                grid.downloadSelectedTorrents();
                break;
            case 'view':
                grid.openTorrentUrl();
                break;
            case 'showmovieinfo':
                grid.showMovieInfo();
                break;
        }
    },

    openHomeUrl : function(grid) {

        var selected = grid.getSelectionModel().getSelection()[0];

        if (selected) {
            window.open(selected.get('link'));
        }
    },

    onSearchFieldEnterPress : function(field, e) {

        if (e.getKey() === e.ENTER) {

            var grid = field.up('gridpanel');
            grid.setSearchTerm(field.getValue());

        }

    },

    onSearchGoButtonClick : function(btn) {
    
        var grid = btn.up('gridpanel'), field = grid.down('searchfield');
    
        grid.setSearchTerm(field.getValue());

    },

    onSearchResultSingleClick : function(view, record, item, index, e, eOpts) {

        var grid = view.up('gridpanel'), detailsPanel = grid.up('panel').down('searchresultdetailspanel');
        // selection = grid.getSelectionModel().getSelection()[0];
        //detailsPanel.expand();
        detailsPanel.setValue(record);
    },

    onSearchResultDoubleClick : function(view, record, item, index, e, eOpts) {

        var url = record.get('torrentLink'), detailsPanel = view.up('gridpanel').up('panel').down('searchresultdetailspanel');
        detailsPanel.expand();
        // this.downloadTorrent(url);

    }
});
