Ext.define('Clutch.view.search.properties.CommentsGrid', {

    extend : 'Ext.grid.Panel',

    requires : ['Clutch.store.CommentsStore'],

    alias : 'widget.commentsgrid',

    items : [],

    config : {
        value : ""
    },
    
     columns : [{
        header : 'Comment',
        flex : 1,
        dataIndex : 'comment'
    }],
    
    store : Ext.create('Clutch.store.CommentsStore'),
    
    
    loadComments : function(commentsUrl){
        
        this.setLoading(true);
        
        Clutch.util.IsoHunt.getComments(commentsUrl, this.processLoadedComments, this);
        
    },
    
    processLoadedComments : function(response) {
        
        this.setLoading(false);
        
        if (response.query && response.query.results) {
            this.store.loadRawData(response.query.results.div);
        }
    },
    
    applyValue: function(commentsUrl){
        
        if (this.isVisible()){
            this.loadComments(commentsUrl);
        }
        
        return commentsUrl;
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