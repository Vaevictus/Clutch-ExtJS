Ext.define('Clutch.view.search.properties.ResultInfo', {

    extend : 'Ext.form.Panel',

    //requires : ['Clutch.view.field.TorrentStateField', 'Clutch.view.field.BytesField','Clutch.view.field.TextTimeField','Clutch.view.field.TimestampField'],

    alias : 'widget.searchresultinfo',

    config : {

    },

    items : [{
        fieldLabel : 'Title',
        name : 'title',
        xtype : 'textfield',
        readOnly : true
    }, {
        fieldLabel : 'Category',
        name : 'category',
        xtype : 'textfield',
        readOnly : true
    }, {
        fieldLabel : 'Date Uploaded',
        name : 'pubDate',
        xtype : 'textfield',
        readOnly : true
    }],

    setValue : function(searchResult) { debugger;
        this.loadRecord(searchResult);
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