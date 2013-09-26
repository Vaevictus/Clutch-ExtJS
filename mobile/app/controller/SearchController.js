Ext.define('mobile.controller.SearchController', {

    extend : 'Deft.mvc.ViewController',

    inject : ['searchStore', 'searchService', 'rpcService'],

    control : {
        searchlist : {
            disclose : 'onDisclose'
        },
        searchField : {
            selector : "toolbar > searchfield",
            listeners : {
                action : 'doSearch'
            }
        },
        goBtn : {
            selector : "toolbar > #btnGo",
            listeners : {
                tap : 'doSearch'
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
        searchStore : null,
        searchService : null,
        rpcService : null

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

    onBtnAddTap : function(btn) {
        //show form for paste of url, options for start
    },

    onBtnStartTap : function(btn) {

        var torrentId = this.getSelectedTorrentId();
        this.getRpcService().Transmission.startTorrent(torrentId).then(function() {
            alert('started torrent');
        }, function() {
            alert('failed to start torrent');
        })
    },

    doSearch : function(location, callback) {

        // this.getView().setMasked({
        // xtype : 'loadmask',
        // indicator : true,
        // message : 'Searching'
        // });
        var searchString = this.getSearchField().getValue();

        this.getSearchService().search(searchString).then({

            success : function(results) {

                this.loadGrid(results);
            },
            failure : function(error) {
                alert(error);
            },
            progress : function(error) {

            },
            scope : this
        });

    },

    loadGrid : function(searchResults) {

        var store = this.getSearchStore();
        store.add(searchResults);

    },
    onDisclose : function(list, record) { debugger;
        var link = record.get('torrentLink');
        var rpcService = this.getRpcService();
        var options = {};
        options.filename = link;
        rpcService.getAllPossibleSettings().then(function(settings) { debugger;
            options['download-dir'] = settings['download-dir'];
            options['paused'] = false;
            options['peer-limit'] = 200;
            options['bandwidthPriority'] = 1;

            rpcService.addTorrent(options).then(function() {
                alert('Torrent added');
            }, function() {
                alert('something went wrong adding torrent from url');
            });
        });

    }
});
