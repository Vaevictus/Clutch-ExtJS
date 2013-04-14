Ext.define('Clutch.controller.Main', {
    extend : 'Ext.app.Controller',
    stores : ['TorrentTransfers', 'SearchResult','PeersStore'],
    init : function(app) {

        var me = this;

        app.on({
            torrentdetailsreceived : me.onTorrentdetailsreceived,
            torrentadded : me.onTorrentAdded,
            torrentsstarted : me.onTorrentStarted,
            torrentsstopped : me.onTorrentStopped,
            torrentsremoved : me.onTorrentRemoved,
            scope : me
        });

        me.control({
            
            'torrenttoolbar #btnAddViaUrl' : {
                click : me.showAddTorrentUrlDialog
            },
            'torrenttoolbar button[action=show-settings]' : {
                click : me.showSettingsDialog
            },
            'torrenttoolbar button[action=show-statistics]' : {
                click : me.showStatisticsDialog
            },
            'torrenttoolbar splitbutton[text=Add torrent]' : {
                click : me.showAddTorrentUrlDialog
            }

        });
    },

    showAddTorrentUrlDialog : function(item) {
        
        Ext.create("Clutch.view.torrent.AddTorrentDialog", {

        }).show();
    },

    showStatisticsDialog : function() {

        var dialog = Ext.create('Clutch.view.statistics.StatsDialog', {

        });
        dialog.show();
        
    },

    onTorrentdetailsreceived : function(torrentData) {
        var grids = Ext.ComponentQuery.query('torrentsgrid');

        Ext.each(grids, function(panel) {
            panel.setTorrents(torrentData.arguments.torrents);
        });
    },

   
    showSettingsDialog : function() {

        var dialog = Ext.create('Clutch.view.settings.SettingsDialog');
        dialog.show();
        //dialog.changeActiveItem(1);
    },
    onTorrentAdded : function(torrentDetails){
        this.showTorrentAddedNotification(arguments);
    },
    onTorrentStopped : function(uselessInfo){
               
        Ext.create('widget.uxNotification', {
            title : 'Notification',
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : 'Torrent(s) stopped successfully',
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();
    },
    onTorrentStarted : function(uselessInfo){
              
        Ext.create('widget.uxNotification', {
            title : 'Notification',
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : 'Torrent(s) started successfully.',
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();
    },
    onTorrentRemoved : function(torrentDetails){
          
        Ext.create('widget.uxNotification', {
            title : 'Notification',
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : 'Torrent(s) removed successfully.',
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();
    },
    showTorrentAddedNotification : function(torrentdetails) { 
     
        Ext.create('widget.uxNotification', {
            title : 'Notification',
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : torrentdetails[0].name + '<br> added successfully.',
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();

    }
});