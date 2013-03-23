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
            }
        });
    },
    onContextMenu : function(view, record, item, index, e) {
        e.stopEvent();
        var contextMenu = view.up('torrentsgrid').contextMenu;
        contextMenu.showAt(e.getXY());
    },

    onContextMenuClick : function(menu, item, e, eOpts) { debugger;
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

    removeSelectedTorrents : function(grid) {
        var sm = grid.getSelectionModel(), selections = sm.getSelection(), torrentIds = [], rpcParams;

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.removeTorrents(torrentIds, false);

    }
});
