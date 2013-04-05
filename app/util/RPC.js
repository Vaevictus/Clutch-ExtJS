/**
 * @class Clutch.util.RPC
 * Utility class for invoking RPC methods against the transmission-daemon RPC server
 * The RPC spec can be found here: https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
 */
Ext.define('Clutch.util.RPC', {
    requires : ['Ext.TaskManager'],
    mixins : {
        observable : 'Ext.util.Observable'
    },
    singleton : true,

    config : {

        checkInterval : 4000

    },

    constructor : function(config) {

        var me = this;

        me.initConfig(config);

        me.mixins.observable.constructor.call(me, config);

        me.addEvents(

        /**
         * @event torrentdetailsreceived
         * Fires when the client has received a list of torrents and their associated properties (speed, progress etc.)
         * @param {Object} responseArgs The response arguments
         */'torrentdetailsreceived',

        /**
         * @event settingsreceived
         * Fires when the client has received a list of config arguments eg download directory, limits etc.
         * @param {Object} responseArgs The response arguments
         */
        'settingsreceived',

        /**
         * @event statsreceived
         * Fires when the client has received a list of session and historic stats
         * @param {Object} responseArgs The Response arguments
         */
        'statsreceived');
    },

    /**
     * Starts the polling process that keeps the torrents grid updated with fresh info
     */
    startTorrentsCheckTask : function() {

        Ext.TaskManager.start({
            run : this.onRunTask,
            interval : this.getCheckInterval(),
            scope : this
        });

    },

    // @private
    onRunTask : function() {
        this.getLoadedTorrents();
        this.getSettings();
        this.getStats();

    },

    getSettings : function() {
        var params = {
            "method" : "session-get",
            "arguments" : {
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : params,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {

                Clutch.app.fireEvent('settingsreceived', Ext.JSON.decode(response.responseText));

            },
            scope : this,

            failure : function(response) {
                var x = response.getResponseHeader('X-Transmission-Session-Id');
                if (x) {
                    window.sessionId = x;
                }
            }
        });
    },

    getStats : function() {
        var params = {
            "method" : "session-stats",
            "arguments" : {
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : params,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {

                Clutch.app.fireEvent('statsreceived', Ext.JSON.decode(response.responseText));

            },
            scope : this,

            failure : function(response) {
                var x = response.getResponseHeader('X-Transmission-Session-Id');
                if (x) {
                    window.sessionId = x;
                }
            }
        });
    },

    getLoadedTorrents : function() {
        var params = {
            "method" : "torrent-get",
            "arguments" : {
                "fields" : []
            }
        };

        var model = Ext.create('Clutch.model.Torrent');
        //TODO - create once as right now this is probably expensive

        Ext.each(model.fields.items, function(field) {
            params.arguments.fields.push(field.name);
            //SAVES DEFINING HUGE MODEL AS WELL AS NAMINCG FIELDS EXPLICITLY HERE
        });

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : params,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {

                Clutch.app.fireEvent('torrentdetailsreceived', Ext.JSON.decode(response.responseText));

            },
            scope : this,

            failure : function(response) {
                var x = response.getResponseHeader('X-Transmission-Session-Id');
                if (x) {
                    window.sessionId = x;
                }
            }
        });

    },

    startTorrents : function(torrentIds) {
        var rpcParams = {
            "method" : "torrent-start-now",
            "arguments" : {
                "ids" : torrentIds
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : rpcParams,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {
                Clutch.app.fireEvent('torrentsstarted', Ext.JSON.decode(response.responseText));

            },
            scope : this,
            failure : function(response) {
            }
        });

    },

    pauseTorrents : function(torrentIds) {
        var rpcParams = {
            "method" : "torrent-stop",
            "arguments" : {
                "ids" : torrentIds
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : rpcParams,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {
                Clutch.app.fireEvent('torrentsstopped', Ext.JSON.decode(response.responseText));
            },
            scope : this,
            failure : function(response) {
                Ext.emptyFn
            }
        });
    },

    removeTorrents : function(torrentIds, deleteLocalData) {
        var rpcParams = {
            "method" : "torrent-remove",
            "arguments" : {
                "ids" : torrentIds,
                "delete-local-data" : deleteLocalData
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : rpcParams,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {

                Clutch.app.fireEvent('torrentsremoved', Ext.JSON.decode(response.responseText));
            },
            scope : this,
            failure : function(response) {

                Ext.emptyFn
            }
        });
    },

    verifyTorrents : function(torrentIds) {
        var rpcParams = {
            "method" : "torrent-verify",
            "arguments" : {
                "ids" : torrentIds
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : rpcParams,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {
                Clutch.app.fireEvent('torrentsverifying', Ext.JSON.decode(response.responseText));
            },
            scope : this,
            failure : function(response) {
                Ext.emptyFn
            }
        });
    },

    addTorrent : function(options) { debugger;
        //var url = options.url;
        // "cookies"            | string      pointer to a string of one or more cookies.
        // 365    "download-dir"       | string      path to download the torrent to
        // 366    "filename"           | string      filename or URL of the .torrent file
        // 367    "metainfo"           | string      base64-encoded .torrent content
        // 368    "paused"             | boolean     if true, don't start the torrent
        // 369    "peer-limit"         | number      maximum number of peers
        // 370    "bandwidthPriority"  | number      torrent's bandwidth tr_priority_t
        // 371    "files-wanted"       | array       indices of file(s) to download
        // 372    "files-unwanted"     | array       indices of file(s) to not download
        // 373    "priority-high"      | array       indices of high-priority file(s)
        // 374    "priority-low"       | array       indices of low-priority file(s)
        // 375    "priority-normal"    | array       indices of normal-priority file(s)

        var rpcParams = {
            "method" : "torrent-add",
            "arguments" : {
                "filename" : options.url,
                "paused" : options.startPaused,
                "bandwidthPriority" : options.bandwidthPriority,
                "peer-limit" : options.peerLimit,
                "download-dir" : options.downloadDirectory
            }
        };

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : rpcParams,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {
                Clutch.app.fireEvent('torrentadded', Ext.JSON.decode(response.responseText).arguments["torrent-added"]);
            },
            scope : this,
            failure : function(response) {
                Ext.emptyFn
            }
        });
    },

    parseTorrentState : function(v) {
        switch (v) {
            case 0:
                return "Stopped";

            case 1:
                return "Waiting Check";

            case 2:
                return "Checking";

            case 3:
                return "Queued Download";

            case 4:
                return "Downloading";

            case 5:
                return "Queued Seed";

            case 6:
                return "Seeding";

            default:
                return "Unknown";
        }
    }
});

