Ext.define('Clutch.controller.TorrentsController', {

    extend : 'Ext.app.Controller',

    refs : [{
        ref : 'torrentsGrid',
        selector : 'torrentsgrid'
    }],

    init : function(app) {
        var me = this;

        me.control({
            'torrentsgrid' : {
                beforeitemcontextmenu : me.onContextMenu
            },
            'torrentcontextmenu' : {
                click : me.onContextMenuClick
            },
            'torrenttoolbar menuitem[action=remove-all]' : {
                click : me.removeAllTorrents
            }
        });
    },
    
    
    
    onContextMenu : function(view, record, item, index, e) {
        e.stopEvent();
        var contextMenu = view.up('torrentsgrid').contextMenu;
        contextMenu.showAt(e.getXY());
    },

    onContextMenuClick : function(menu, item, e, eOpts) { 
        var grid = this.getTorrentsGrid();

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

    startSelectedTorrents : function(grid) {
        var sm = grid.getSelectionModel(), selections = sm.getSelection(), torrentIds = [], rpcParams;

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.startTorrents(torrentIds);

    },
    
    startAllTorrents : function() {
        
        var grid = this.getTorrentsGri(),
            store = grid.getSelectionModel().getStore(),
            selections = store.getRange(), //gets all torrents
            torrentIds = [], rpcParams;
        
        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });
        
        Clutch.util.RPC.startTorrents(torrentIds);
    },
    
      removeAllTorrents : function() {
       
        var grid = this.getTorrentsGrid(),
            store = grid.getSelectionModel().getStore(),
            selections = store.getRange(), //gets all torrents
            torrentIds = [], rpcParams;
        
        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });
              
        Clutch.util.RPC.removeTorrents(torrentIds, false);
    },

    removeSelectedTorrents : function(grid) {
        var sm = grid.getSelectionModel(), selections = sm.getSelection(), torrentIds = [];

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.removeTorrents(torrentIds, false);

    }
});
