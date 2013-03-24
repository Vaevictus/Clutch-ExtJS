Ext.define('Clutch.controller.Main', {
    extend : 'Ext.app.Controller',
    stores : ['TorrentTransfers', 'SearchResult'],
    init : function(app) {

        var me = this;

        app.on({
            torrentdetailsreceived : me.onTorrentdetailsreceived,
            statsreceived : me.onStatsReceived,
            scope : me
        });

        me.control({
            //empty for now
        });
    },

    onTorrentdetailsreceived : function(torrentData) {
        var panelsArray = Ext.ComponentQuery.query('torrentsgrid');

        Ext.each(panelsArray, function(panel) {
            panel.setTorrents(torrentData.arguments.torrents);
        });
    },

    onStatsReceived : function(data) {
        //do nothing for now
    }
});

/*
 var arguments =  {
 "method":"torrent-get",
 "arguments":{
 "fields":[
 "id",
 "name",
 "status",
 "totalSize",
 "sizeWhenDone",
 "haveValid",
 "leftUntilDone",
 "haveUnchecked",
 "eta",
 "uploadedEver",
 "uploadRatio",
 "rateDownload",
 "rateUpload",
 "metadataPercentComplete",
 "addedDate",
 "trackerStats",
 "error",
 "errorString",
 "recheckProgress",
 "bandwidthPriority",
 "seedRatioMode",
 "seedRatioLimit"
 ]
 }
 }

 */