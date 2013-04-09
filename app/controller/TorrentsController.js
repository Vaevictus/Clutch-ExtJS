Ext.define('Clutch.controller.TorrentsController', {

    extend : 'Ext.app.Controller',

    refs : [{
        ref : 'torrentsGrid',
        selector : 'torrentsgrid'
    }, {
        ref : 'detailsPanel',
        selector : 'torrentdetailspanel'
    },{
        ref : 'torrentTree',
        selector : 'torrenttree'
    }],

    requires : ['Ext.ux.window.Notification'],

    init : function(app) {
        var me = this;
       
         app.on({
            torrentdetailsreceived : me.onTorrentdetailsreceived,
            scope : me
        });
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
                click : me.onRemoveAllTorrentsClick
            },
            'torrenttoolbar menuitem[action=remove-selected]' : {
                click : me.onRemoveSelectedTorrentsClick
            },
            'torrenttoolbar menuitem[action=remove-finished]' : {
                click : me.onRemoveFinishedTorrentsClick
            },
            'torrenttoolbar menuitem[action=pause-all]' : {
                click : me.onPauseAllTorrentsClick
            },
            'torrenttoolbar splitbutton[action=remove-selected]' : {
                click : me.onRemoveSelectedTorrentsClick
            },
            'torrenttoolbar splitbutton[action=pause-selected]' : {
                click : me.onPauseSelectedTorrentsClick
            },
            'torrenttoolbar splitbutton[action=resume-selected]' : {
                click : me.onStartSelectedTorrentsClick
            },
            'torrenttree' : {
                itemclick : me.onTreeNodeClick
            },
            'addtorrentdialog button[action=add-torrent]' : {
                click : me.onConfirmAddTorrent
            },
            'addtorrentdialog button[action=cancel]' : {
                click : me.onCancelAddTorrent
            }

        });
    },
    onTorrentdetailsreceived : function(response){
        var torrents = response.arguments.torrents;
        this.getTorrentTree().setTorrents(torrents);
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
                this.onStartSelectedTorrentsClick();
                break;
            case 'remove':
                this.onRemoveSelectedTorrentsClick();
                break;
            case 'pause':
                this.onPauseSelectedTorrentsClick();
                break;
            case 'throttle':
                this.onThrottleSelectedTorrentsClick();
                break
            case 'verify':
                this.onVerifySelectedTorrentsClick();
                break
        }
    },

    throttleSelectedTorrents : function() {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getSelectedTorrentIds();
        //TODO
    },

    onStartSelectedTorrentsClick : function() {
        var grid = this.getTorrentsGrid();
        grid.startSelectedTorrents();

    },

    onStartAllTorrentsClick : function() {

        var grid = this.getTorrentsGrid()
        grid.startAllTorrents();

    },

    onRemoveAllTorrentsClick : function() {

        var grid = this.getTorrentsGrid();
        grid.removeAllTorrents();

    },
    onRemoveSelectedTorrentsClick : function() {
        var grid = this.getTorrentsGrid();
        grid.removeSelectedTorrents();

    },
    onRemoveFinishedTorrentsClick : function() {
        var grid = this.getTorrentsGrid();
        grid.removeFinishedTorrents();
    },

    onPauseSelectedTorrentsClick : function() {

        var grid = this.getTorrentsGrid();
        grid.pauseSelectedTorrents();
    },

    onPauseAllTorrentsClick : function() {

        var grid = this.getTorrentsGrid();
        grid.pauseAllTorrents();
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
