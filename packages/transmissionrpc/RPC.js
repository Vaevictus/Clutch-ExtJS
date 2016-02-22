/**
 * @class Clutch.util.RPC
 * Utility class for invoking RPC methods against the transmission-daemon RPC server
 * The RPC spec can be found here: https://trac.transmissionbt.com/browser/trunk/extras/rpc-spec.txt
 */
Ext.define('Transmission.RPC', {

    requires : ['Transmission.model.LowDetailTorrent'],

    mixins : {

        observable : 'Ext.util.Observable'

    },

    singleton : true,

    config : {

        checkInterval : 4000,

        settings : null

    },

    constructor : function(config) {

        var me = this;

        me.initConfig(config);

        me.mixins.observable.constructor.call(me, config);

    },
    
    /**
     * Starts the polling process that keeps the torrents grid updated with fresh info
     */
    startTasksExtJs : function() {

        Ext.TaskManager.start({
            run : this.onRunTaskExtJS,
            interval : this.getCheckInterval(),
            scope : this
        });

    },

    // @private
    onRunTaskExtJS : function() {
        this.getLoadedTorrents().then({
            
            success: function(response){
           
                  
            },
            failure : function(error){
                
            },
            scope : this
        });
        this.getStats().then({
            
            success: function(stats){
                this.fireEvent('statsreceived',stats);    
            },
            failure : function(error){
                
            },
            scope : this
        });

    },
    
    invoke : function(rpcParams, eventName) {

        var deferred = Ext.create('Deft.promise.Deferred');

        Ext.Ajax.request({
            url : '/transmission/rpc',
            jsonData : rpcParams,
            headers : {
                'X-Transmission-Session-Id' : this.sessionId
            },
            success : function(response) {
                var responseObject = Ext.JSON.decode(response.responseText);
                deferred.resolve(responseObject);
                if (eventName){
                    this.fireEvent(eventName, responseObject);
                }
            },
            scope : this,
            failure : function(response) {
                
                if (response.status === 409) {
                    this.sessionId = response.getResponseHeader('X-Transmission-Session-Id');
                    this.invoke(rpcParams, eventName); //reinvoke the  method with the proper session id
                }
                
                deferred.reject(response);
            }
        });

        return deferred.promise;
    },

    getInitialSettings : function() {
        
        this.isPortOpen();
        
        return this.sessionGet();
    },

    isPortOpen : function() {
      var rpcParams = {
          "method" : "port-test"
      }  
       return this.invoke(rpcParams, 'portstatusreceived');
    },
    getAllPossibleSettings : function() {

        var rpcParams = {
            "method" : "session-get",
            "arguments" : {
            }
        }

        return this.invoke(rpcParams, 'settingsreceived');
    },
    
    setFilesToWanted: function(torrentId, filesWanted){
      
      var rpcParams = {
          "method" : 'torrent-set',
          "arguments" : {
              "ids" : [torrentId],
              "files-wanted": filesWanted
          }
      }
      
      return this.invoke(rpcParams, 'filessetwanted');
        
    },
    
     setFilesToNotWanted: function(torrentId, filesNotWanted){
      
      var rpcParams = {
          "method" : 'torrent-set',
          "arguments" : {
              "ids" : [torrentId],
              "files-unwanted": filesNotWanted
          }
      }
      
      return this.invoke(rpcParams, 'filessetnotwanted');
        
    },

    getStats : function() {

        var rpcParams = {
            "method" : "session-stats",
            "arguments" : {
            }
        };

        return this.invoke(rpcParams,'statsreceived');
    },

    getLoadedTorrents : function() {

        var rpcParams = {
            "method" : "torrent-get",
            "arguments" : {
                "fields" : []
            }
        };

        var model = Ext.create('Transmission.model.Torrent'), deferred = Ext.create('Deft.promise.Deferred');

        //TODO - create model once as right now this is probably expensive

        Ext.each(model.fields.keys, function(field) {
            rpcParams.arguments.fields.push(field);
            //SAVES DEFINING HUGE MODEL AS WELL AS NAMINCG FIELDS EXPLICITLY HERE
        });

        return this.invoke(rpcParams, 'torrentdetailsreceived');

    },

    startTorrent : function(id) {

        var arr = new Array();

        arr.push(id);

        return this.startTorrents(arr);
    },
    
    portTest : function() {
      var rpcParams = {
          "method" : "port-test",
          "arguments" : {}
      }  
      return this.invoke(rpcParams)
    },

    startTorrents : function(torrentIds) {

        var rpcParams = {
            "method" : "torrent-start-now",
            "arguments" : {
                "ids" : torrentIds
            }
        };

        return this.invoke(rpcParams, 'torrentsstarted');
    },

    pauseTorrents : function(torrentIds) {

        var rpcParams = {
            "method" : "torrent-stop",
            "arguments" : {
                "ids" : torrentIds
            }
        };

        return this.invoke(rpcParams, 'torrentsstopped');

    },

    getTorrentIdsFromTorrents : function(torrents) {

        var torrentIds = [];

        Ext.each(torrents, function(t) {
            torrentIds.push(t.id);
        }, this);
        return torrentIds;
    },

    removeTorrent : function(torrentId, deleteLocalData) {
        var arr = new Array();
       
        arr.push(torrentId);

        return this.removeTorrents(arr, deleteLocalData);
        //todo support physical deletion of data

    },

    removeTorrents : function(torrentIds, deleteLocalData) {
       
        var deferred = Ext.create('Deft.promise.Deferred');

        var rpcParams = {
            "method" : "torrent-remove",
            "arguments" : {
                "ids" : torrentIds,
                "delete-local-data" : deleteLocalData
            }
        };

        return this.invoke(rpcParams, 'torrentsremoved');
    },

    applySettings : function(settings, oldValue) { //TODO I think this needs to be removed
        if (settings === oldValue)
            return settings;

        return settings;
    },

    sessionGet : function(requestedParams) {

        var rpcParams = {
            "method" : "session-get",
            "arguments" : {} //todo - only ask for values specd in requestedParams
        };
        
        return this.invoke(rpcParams, 'settingsreceived')
    },

    sessionSet : function(requestedParams) {

        var rpcParams = {
            "method" : "session-set",
            "arguments" : requestedParams
        };

        return this.invoke(rpcParams,'settingschanged');

    },

    verifyTorrents : function(torrentIds) {

        var rpcParams = {
            "method" : "torrent-verify",
            "arguments" : {
                "ids" : torrentIds
            }
        };

        return this.invoke(rpcParams,'torrentsverifying');
    },

    addTorrent : function(options) {
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
            "arguments" : options
        };

        return this.invoke(rpcParams,'torrentadded');
    },

    // Adds a torrent from a local .torrent file
    // Options will provide the metainfo (base64-encoded .torrent content)
    addTorrentFile : function(options) {
        var rpcParams = {
            "method" : "torrent-add",
            "arguments" : options
        };

        return this.invoke(rpcParams,'torrentadded');
    },

    //not used yet
    getFreeSpace : function(path, cb, scope) {

        var rpcParams = {
            "method" : "free-space",
            "arguments" : {
                "path" : path
            }
        };

        return this.invoke(rpcParams,'freespacereceived');
    },

    parseTorrentState : function(v) {
        switch (v) {
            case 0:
                return "Paused";

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

