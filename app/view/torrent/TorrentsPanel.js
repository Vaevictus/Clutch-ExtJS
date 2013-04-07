Ext.define('Clutch.view.torrent.TorrentsPanel', {

    alias : 'widget.torrentspanel',
    
    selectable : true,

    extend : 'Ext.panel.Panel',

    requires : ['Clutch.view.torrent.Tree','Clutch.view.torrent.TorrentsGrid', 'Clutch.view.torrent.properties.DetailsPanel'],

    title : 'Torrents',

    layout : 'border',

    items : [{
        region : 'west',
        xtype : 'torrenttree',
        split : true,
        collapsible : true,
        collapsed : false

    }, {
        region : 'center',
        xtype : 'torrentsgrid'
    }, {
        region : 'east',
        xtype : 'torrentdetailspanel',
        width : 500,
        collapsible : true,
        collapsed : true,
        split : true

    }]

});
