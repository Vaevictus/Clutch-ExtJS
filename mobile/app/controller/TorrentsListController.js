Ext.define('mobile.controller.TorrentsListController', {
    extend : 'Deft.mvc.ViewController',
    inject : ['torrentsStore', 'rpcService'],

    control : {
        torrentslist : {
            disclose: 'onDisclose'
        },
        addBtn: {
            selector: "toolbar > #btnAdd",
            listeners : {
                tap: 'onBtnAddTap'
            }
        },
        startBtn: {
            selector: "toolbar > #btnStart",
            listeners : {
                tap: 'onBtnStartTap'
            }
        }
        // pauseBtn: {
            // selector: "toolbar > #btnPause",
            // listeners : {
                // tap: 'onBtnPauseTap'
            // }
        // },
        // removeBtn: {
            // selector: "toolbar > #btnRemove",
            // listeners : {
                // tap: 'onBtnRemoveTap'
            // }
        // }
    },

    config : {
        torrentsStore : null,
        rpcService : null
       
    },

    init : function() {
        this.callParent(arguments);
        this.getServerTorrents();
    },

    onListItemTap : function(dataview, index, target, record, e, eOpts) {
        var map, info, details;

        if (record) {
            details = Ext.create('CityBars.view.DetailPanel', {
                title : 'Details',
                controllerConfig : {
                    record : record
                }
            });

            this.getView().push(details);
        }
    },
    
    getSelectedTorrentId : function() {
        var grid = this.getView().down('list');
        
        var selected = grid.getSelection();
        if (selected){
            return selected[0].get('id');
        }
        return null;
        
    },

    onBtnAddTap : function(btn){
        //show form for paste of url, options for start
    },
    
    onBtnStartTap : function(btn){
        
        var torrentId = this.getSelectedTorrentId();
        this.getRpcService().Transmission.startTorrent(torrentId).then(
             function() {
                 alert('started torrent');
             },
             function() {
                 alert('failed to start torrent');
             }
         )   
        
    },
    
    onBtnRemoveTap : function(btn){
    
     var torrentId = this.getSelectedTorrentId();
     
        this.getRpcService().Transmission.removeTorrent(torrentId, false).then( 
             function() {
                 alert('removed torrent');
             },
             function() {
                 alert('failed to remove torrent');
             }
         )  
    },
    getServerTorrents : function(location, callback) { 
        // this.getView().setMasked({
            // xtype : 'loadmask',
            // indicator : true,
            // message : 'Loading torrents from Transmission Daemon...'
        // });
       
        this.getRpcService().getLoadedTorrents().then({

            success : function(rpcResponse) { 
              var torrents = rpcResponse.arguments.torrents;
              
              var task = Ext.create('Ext.util.DelayedTask', this.getServerTorrents, this);
                task.delay(1600);
                this.loadTorrents(torrents);
            },
            failure : function(error) {
                var task = Ext.create('Ext.util.DelayedTask', this.getServerTorrents, this);
                task.delay(1600);
            },
               progress : function(error) {
               
            },
            scope : this
        });

      
    },
    
    loadTorrents : function(torrentArray){
        //load the torrents into the store which will update the grid
        var store = this.getTorrentsStore();
        store.add(torrentArray);
       
    },
    onDisclose : function() {
        debugger;
    }
}); 