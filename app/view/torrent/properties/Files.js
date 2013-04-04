Ext.define('Clutch.view.torrent.properties.Files', {
    
extend : 'Ext.form.Panel',

alias : 'widget.torrentfiles',

items : [

{
    xtype: 'fieldset',
    title : 'Activity',
    defaults : {xtype : 'textfield'},
    items : [{
        fieldLabel: 'Availability',
        name : 'availability'
    },{
        fieldLabel : 'Downloaded',
        name : 'downloaded'
    },{
        fieldLabel : 'Downloaded',
        name : 'downloaded'
    },{
        fieldLabel : 'Uploaded',
        name : 'uploaded'
    },{
        fieldLabel : 'State',
        name : 'state'
    },{
        fieldLabel : 'Running Time',
        name : 'runningTime'
    },{
        fieldLabel : 'Remaining Time',
        name : 'remainingTime'
    },{
        fieldLabel : 'Last Activity',
        name : 'lastActivity'
    },{
        fieldLabel : 'Errors',
        name : 'error'
    }]
},

{
    xtype: 'fieldset',
    title : 'Details',
    defaults : {
      xtype : 'textfield'  
    },
    items : [{
        fieldLabel : 'Size',
        name : 'size'
    },{
        fieldLabel : 'Location',
        name : 'location'
    },{
        fieldLabel : 'Hash',
        name : 'hash'
    },{
        fieldLabel : 'Privacy',
        name : 'Privacy'
    },{
        fieldLabel : 'Origin',
        name : 'origin'
    },{
        fieldLabel : 'Comment',
        name : 'comment'
    }]
    
}

],

config : {
    
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