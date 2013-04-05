Ext.define('Clutch.controller.TorrentsController', {

    extend : 'Ext.app.Controller',

    refs : [{
        ref : 'torrentsGrid',
        selector : 'torrentsgrid'
    }, {
        ref : 'detailsPanel',
        selector : 'torrentdetailspanel'
    }],

    requires : ['Ext.ux.window.Notification'],

    init : function(app) {
        var me = this;

        me.control({
            'torrentsgrid' : {
                beforeitemcontextmenu : me.onContextMenu,
                afterrender : me.onAfterRenderGrid,
                storeload : me.onTorrentSelect,
                itemclick : me.onTorrentSelect,
                itemdblclick : me.onTorrentDoubleClick
            },
            'torrentcontextmenu' : {
                click : me.onContextMenuClick
            },
            'torrenttoolbar menuitem[action=remove-all]' : {
                click : me.removeAllTorrents
            },
            'torrenttoolbar menuitem[action=remove-selected]' : {
                click : me.removeSelectedTorrents
            },
            'torrenttoolbar menuitem[action=remove-finished]' : {
                click : me.removeFinishedTorrents
            },
            'torrenttree' : {
                itemclick : me.onTreeNodeClick
            },
            'addtorrentdialog button[action=add-torrent]' : {
                click : me.onConfirmAddTorrent
            },
            'addtorrentdialog button[action=cancel]' : {
                click : me.onCancelAddTorrent
            },
            'torrenttoolbar menuitem[action=pause-all]' : {
                click : me.pauseAllTorrents
            }
        });
    },
    onAfterRenderGrid : function(grid) {

        grid.store.on('datachanged', function(store) {

            grid.fireEvent('storeload', grid);
        });
    },
    onTorrentDoubleClick : function(grid, record, index, eOpts) {
        this.getDetailsPanel().expand();
    },
    onTorrentSelect : function(grid, record, index, eOpts) {

        var selection = grid.getSelectionModel().getSelection()[0];

        if (!selection)
            return;

        this.getDetailsPanel().setValue(selection);
    },
    onTreeNodeClick : function(treepanel, record, item, index, e, eOpts) {

        var grid = this.getTorrentsGrid();

        grid.setFilterFn(record.raw.filterFn);
    },
    onContextMenu : function(view, record, item, index, e) {
        e.stopEvent();
        var contextMenu = view.up('torrentsgrid').contextMenu;
        contextMenu.showAt(e.getXY());
    },

    onContextMenuClick : function(menu, item, e, eOpts) {

        var grid = menu.grid;

        if (!item) {
            return;
        }

        switch (item.action) {
            case 'start':
                this.startSelectedTorrentsClick(grid);
                break;
            case 'remove':
                this.removeSelectedTorrents(grid);
                break;
            case 'pause':
                this.pauseSelectedTorrents(grid);
                break;
            case 'throttle':
                this.throttleSelectedTorrents(grid);
                break
        }
    },

    throttleSelectedTorrents : function(grid) {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getSelectedTorrentIds();
        //TODO
    },

    startSelectedTorrentsClick : function(grid) {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getSelectedTorrentIds();

        Clutch.util.RPC.startTorrents(torrentIds);

    },

    startAllTorrents : function() {

        var grid = this.getTorrentsGrid(), torrentIds = grid.getAllTorrentIds();

        Clutch.util.RPC.startTorrents(torrentIds);
    },

    removeAllTorrents : function() {

        var grid = this.getTorrentsGrid(), torrentIds = grid.getAllTorrentIds();

        Clutch.util.RPC.removeTorrents(torrentIds, false);
    },
    removeSelectedTorrents : function(grid) {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getSelectedTorrentIds();

        Clutch.util.RPC.removeTorrents(torrentIds, false);

    },
    removeFinishedTorrents : function(grid) {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getFinishedTorrentIds();

        Clutch.util.RPC.removeTorrents(torrentIds, false);

    },
    pauseAllTorrents : function() {

        var grid = this.getTorrentsGrid(), torrentIds = grid.getAllTorrentIds();

        Clutch.util.RPC.pauseTorrents(torrentIds);
    },

    pauseSelectedTorrents : function(grid) {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getSelectedTorrentIds();

        Clutch.util.RPC.pauseTorrents(torrentIds);

    },

    //todo - actually use the rest of the values from the form
    onConfirmAddTorrent : function(btn) {
        var dialog = btn.up('addtorrentdialog'), options = dialog.getValue();

        Clutch.util.RPC.addTorrent(options);
        dialog.close();
    },
    onCancelAddTorrent : function(btn) {
        btn.up('addtorrentdialog').close();
    }
});
