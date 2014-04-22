Ext.define('Clutch.view.torrent.TorrentsPanel', {

    alias : 'widget.torrentspanel',

    controller : 'Clutch.controller.TorrentsPanelController',

    inject : ['torrentsGrid'],

    config : {
        torrentsGrid : null
    },

    selectable : true,

    extend : 'Ext.panel.Panel',

    requires : ['Clutch.view.torrent.Tree', 'Clutch.view.torrent.TorrentsGrid', 'Clutch.view.torrent.properties.DetailsPanel'],

    title : 'Torrents',

    layout : 'border',

    initComponent : function() {
        this.callParent(arguments);
         console.log('creating ' + this.$className);
        this.add({
            region : 'west',
            xtype : 'torrenttree',
            split : true,
            collapsible : true,
            collapsed : false

        }, this.getTorrentsGrid(), {
            region : 'south',
            xtype : 'torrentdetailspanel',
            //width : 500,
            height : '50%',
            collapsible : true,
            collapsed : true,
            split : true

        })
    },

    items : []

});
