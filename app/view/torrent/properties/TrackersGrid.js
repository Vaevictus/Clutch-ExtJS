Ext.define('Clutch.view.torrent.properties.TrackersGrid', {

    extend : 'Ext.grid.Panel',

    requires : ['Clutch.store.TrackerStore'],

    alias : 'widget.trackersgrid',

    items : [],

    config : {
        value : []
    },
    
     columns : [{
        header : 'Url',
        flex : 1,
        dataIndex : 'announce'
    }, {
        header : 'Status',
        //xtype : 'torrentstatuscolumn',
        flex : 1,
        dataIndex : 'lastAnnounceResult'
    }],
    
    store : Ext.create('Clutch.store.TrackerStore'),
    
    applyValue : function(trackers, oldVale) {
       
        this.store.loadRawData(trackers);
        return trackers;
    },
    
    initComponent : function() {
        this.callParent(arguments);
        console.log('creating ' + this.$className);
    }
    
});

/*1.18 MB of 497.6 MB (0.35%), 589.8 kB Unverified
 Activity

 Availability: 100%
 Downloaded:  815.1 kB
 Uploaded: 3.11 MB (Ratio: 3.81)
 State: Downloading
 Running Time: 4 minutes
 Remaining Time:  17 hours
 Last Activity: Active now
 Error: None

 Details

 Size: 497.6 MB (1,899 pieces @ 256.0 KiB)
 Location: /home/whitcombecr/Downloads
 Hash: 63db3c2bedc40505d1f548c3a8b3b05597420190
 Privacy: Public torrent
 Origin: Created by ruTorrent (PHP Class - Adrien Gibrat) on Mon Feb 18 2013
 Comment: Torrent downloaded from <a target="_blank" href="http://www.btscene.eu">http://www.btscene.eu</a>
 */