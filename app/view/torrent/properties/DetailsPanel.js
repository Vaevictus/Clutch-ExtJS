Ext.define('Clutch.view.torrent.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.torrentdetailspanel',

    requires : ['Clutch.view.peer.PeersGrid', 'Clutch.view.torrent.properties.Info', 'Clutch.view.torrent.properties.TrackersGrid', 'Clutch.view.torrent.properties.FilesGrid'],

    title : 'Details',

    items : [{
        xtype : 'torrentinfo',
        title : 'Info'
    }, {
        xtype : 'peersgrid',
        title : 'Peers'
    }, {
        xtype : 'trackersgrid',
        title : 'Trackers'
    }, {
        xtype : 'filesgrid',
        title : 'Files'
    }],

    setValue : function(torrentData) {
      
        var torrentId = torrentData.get('id');
        
        this.setTitle('Details: ' + torrentData.get('name'));
        
        this.down('torrentinfo').setValue(torrentData);
        
        this.down('trackersgrid').setValue(torrentData.get('trackerStats'));
        
        this.down('peersgrid').setValue(torrentData.get('peers'));
        
        var files = torrentData.get('files');
        
        var fileStats = torrentData.get('fileStats');
        
        var filesAndStatsMerged = Ext.Object.merge(files, fileStats);
       
        Ext.each(filesAndStatsMerged, function(file, index){
          
          file.fileIndex = index; 
          
          file.torrentId = torrentId;
          
          file.percentComplete = file.bytesCompleted / file['length'];
       });
       
         this.down('filesgrid').setValue(filesAndStatsMerged);
      
    }
});
