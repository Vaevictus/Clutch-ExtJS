Ext.define('Clutch.view.torrent.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.torrentdetailspanel',

    requires : ['Clutch.view.peer.PeersGrid', 'Clutch.view.torrent.properties.Info', 'Clutch.view.torrent.properties.TrackersGrid', 'Clutch.view.torrent.properties.Files'],

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
        xtype : 'torrentfiles',
        title : 'Files'
    }],

    setValue : function(torrentData) {
        this.setTitle('Details: ' + torrentData.get('name'));
        this.down('torrentinfo').setValue(torrentData);
        this.down('trackersgrid').setValue(torrentData.get('trackerStats'));
        this.down('peersgrid').setValue(torrentData.get('peers'));
    }
});
