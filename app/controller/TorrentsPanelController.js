Ext.define('Clutch.controller.TorrentsPanelController', {

    extend : 'Deft.mvc.ViewController',

    inject : ['rpcService'],

    requires : ['Ext.ux.window.Notification'],

    config : {

        rpcService : null
       
    },

    observe : {
        
        rpcService : {

            torrentdetailsreceived : 'onTorrentDetailsReceived'

        }
    },
    control : {
        torrentsGrid : {
            selector : 'torrentsgrid',
            listeners : {
                beforeitemcontextmenu : 'onContextMenu',
                afterrender : 'onAfterRenderGrid',
                storeload : 'onTorrentSelect',
                itemclick : 'onTorrentSelect',
                itemdblclick : 'onTorrentDoubleClick'
            }
        },

        detailsPanel : {
            selector : 'torrentdetailspanel',
            listeners : {

            }
        },
        torrentTree : {
            selector : 'torrenttree',
            listeners : {
                itemclick : 'onTreeNodeClick'
            }
        },
       
        view : {
            listeners : {
                boxready : 'startTasks'
            }
        }
    },
    startTasks : function() {
        this.getRpcService().startTasksExtJs();
    },

    onTorrentDetailsReceived : function(rpcResponse) { 
        
        var torrents = rpcResponse.arguments.torrents;
        
        this.getTorrentTree().setTorrents(torrents);
        
        this.getTorrentsGrid().setTorrents(torrents);

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
        
        var grid = this.getTorrentsGrid();
        
        // if (!grid.contextMenu){
            // grid.contextMenu = Ext.create('Clutch.view.torrent.TorrentContextMenu', { grid : grid });
        // }
      
        grid.contextMenu.showAt(e.getXY());
    },

    

    throttleSelectedTorrents : function() {
        var grid = this.getTorrentsGrid(), torrentIds = grid.getSelectedTorrentIds();
        //TODO
    },

    //todo - actually use the rest of the values from the form
    onConfirmAddTorrent : function(btn) {
        var dialog = btn.up('addtorrentdialog');
        dialog.addTorrent();

    }
});
