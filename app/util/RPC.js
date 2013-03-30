/**
 * @class NITB.util.NotificationManager
 * NITB Notification utility system
 */
Ext.define('Clutch.util.RPC', {
    requires : ['Ext.TaskManager'],
    mixins : {
        observable : 'Ext.util.Observable'
    },
    singleton : true,

    config : {

        checkInterval : 2000

    },
    
    constructor : function(config) {

        var me = this;

        me.initConfig(config);

        me.mixins.observable.constructor.call(me, config);

        me.addEvents(

        /**
         * @event torrentdetailsreceived
         * Fires when the client has received a list of torrents and their associated properties (speed, progress etc.)
         * @param {Object} notification The Notification Object
         */'torrentdetailsreceived');

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
    onRunTask: function() {
      this.getLoadedTorrents();
      this.getStats();
      
    },
    
    
    getSettings: function() {
        
    },
    getStats: function() {
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
                "fields" : ["peersConnected", "percentDone", "seedsConnected", "id", "name", "status", "totalSize", "sizeWhenDone", "haveValid", "leftUntilDone", "haveUnchecked", "eta", "uploadedEver", "uploadRatio", "rateDownload", "rateUpload", "metadataPercentComplete", "addedDate", "trackerStats", "error", "errorString", "recheckProgress", "bandwidthPriority", "seedRatioMode", "seedRatioLimit"]
            }
        };

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

    stopTorrents : function(torrentIds) {
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
            jsonData : params,
            headers : {
                'X-Transmission-Session-Id' : window.sessionId
            },
            success : function(response) {
                Clutch.app.fireEvent('torrentsverifying', Ext.JSON.decode(response.responseText));
            },
            scope : this,
            failure : function(response) {
                Ext.emptyFn;
            }
        });
    },
    
   
});
