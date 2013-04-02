Ext.define('Clutch.controller.TorrentsController', {

    extend : 'Ext.app.Controller',

    refs : [{
        ref : 'torrentsGrid',
        selector : 'torrentsgrid'
    }],

    requires : ['Ext.ux.window.Notification'],

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
            },
            'torrenttree' : {
                itemclick : me.onTreeNodeClick
            },
            'addtorrentdialog button[action=add-torrent]' : {
                click : me.onConfirmAddTorrent
            },
            'torrenttoolbar menuitem[action=pause-all]' : {
                click : me.pauseAllTorrents
            }
        });
    },

    onTreeNodeClick : function(treepanel, record, item, index, e, eOpts) {

        var grid = this.getTorrentsGrid();
        grid.setFilter(record.raw.filter);
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

        var grid = this.getTorrentsGri(), store = grid.getSelectionModel().getStore(), selections = store.getRange(), //gets all torrents
        torrentIds = [], rpcParams;

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.startTorrents(torrentIds);
    },

    removeAllTorrents : function() {

        var grid = this.getTorrentsGrid(), store = grid.getSelectionModel().getStore(), selections = store.getRange(), //gets all torrents
        torrentIds = [], rpcParams;

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.removeTorrents(torrentIds, false);
    },
    pauseAllTorrents : function() {

        var grid = this.getTorrentsGrid(), store = grid.getSelectionModel().getStore(), selections = store.getRange(), //gets all torrents
        torrentIds = [], rpcParams;

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.pauseTorrents(torrentIds);
    },

    pauseSelectedTorrents : function(grid) {
        var sm = grid.getSelectionModel(), selections = sm.getSelection(), torrentIds = [];

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.pauseTorrents(torrentIds);

    },

    removeSelectedTorrents : function(grid) {
        var sm = grid.getSelectionModel(), selections = sm.getSelection(), torrentIds = [];

        Ext.each(selections, function(torrent) {
            torrentIds.push(torrent.data.id);
        });

        Clutch.util.RPC.removeTorrents(torrentIds, false);

    },

    //todo - actually use the rest of the values from the form
    onConfirmAddTorrent : function(btn) {
        var dialog = btn.up('addtorrentdialog'), url = dialog.getUrl();

        Clutch.util.RPC.addTorrent(url);
        dialog.close();
    }
});
