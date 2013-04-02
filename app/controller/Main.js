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
            '#searchField' : {
                specialkey : me.onSearchFieldEnterPress
            },
            'torrenttoolbar #btnAddViaUrl' : {
                click : me.createAddTorrentUrlDialog
            }
        });
    },
    
    createAddTorrentUrlDialog : function(item) {
        Ext.create("Clutch.view.torrent.AddTorrentDialog", {
                
            }).show();
    },

    onTorrentdetailsreceived : function(torrentData) {
        var panelsArray = Ext.ComponentQuery.query('torrentsgrid');

        Ext.each(panelsArray, function(panel) {
            panel.setTorrents(torrentData.arguments.torrents);
        });
    },
     onSearchFieldEnterPress : function(field, e) {
      
        if (e.getKey() === e.ENTER) {
            var searchText = field.getValue();
            Clutch.app.fireEvent('dosearch', searchText);
           
        }

    },
    onStatsReceived : function(data){
        
        var args = data.arguments;
        Ext.each(Ext.ComponentQuery.query('speedcomponent'), function(control){
           control.setSpeedUp(args.downloadSpeed);
           control.setSpeedDown(args.uploadSpeed); 
        });
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