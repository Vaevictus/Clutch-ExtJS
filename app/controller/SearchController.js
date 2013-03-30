Ext.define('Clutch.controller.SearchController', {

    extend : 'Ext.app.Controller',

    views : ['search.SearchResultGrid'],

    init : function(app) {
        var me = this;

        me.control({

            'searchresultgrid button' : {
                click : me.doSearch
            },
             'searchcontextmenu' : {
                click : me.onContextMenuClick
            },
            'searchresultgrid' : {
                beforeitemcontextmenu : me.onContextMenu
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
    },
    
    onContextMenu : function(view, record, item, index, e) {
        e.stopEvent();
        debugger;
        var contextMenu = view.up('searchresultgrid').down('searchcontextmenu');
        //var contextMenu = view.up('searchresultgrid').contextMenu;
        contextMenu.showAt(e.getXY());
    },
    
     onContextMenuClick : function(menu, item, e, eOpts) {
         debugger;
        var grid = menu.up('searchresultgrid');
        debugger;

        if (!item) {
            return;
        }

        switch (item.action) {
            case 'start':
                this.startSelectedTorrents(grid);
                break;
            case 'remove':
                this.removeSelectedTorrents(grid);
                break;
        }
    },
});
