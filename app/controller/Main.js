Ext.define('Clutch.controller.Main', {
    extend : 'Ext.app.Controller',
    stores : ['TorrentTransfers', 'SearchResult','PeersStore'],
    init : function(app) {

        var me = this;

        app.on({
            torrentdetailsreceived : me.onTorrentdetailsreceived,
            torrentadded : me.showTorrentAddedNotification,
            statsreceived : me.onStatsReceived,
            scope : me
        });

        me.control({
            '#searchField' : {
                specialkey : me.onSearchFieldEnterPress
            },
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
    onSearchFieldEnterPress : function(field, e) {

        if (e.getKey() === e.ENTER) {
            var searchText = field.getValue();
            Clutch.app.fireEvent('dosearch', searchText);

        }

    },
    onStatsReceived : function(data) {

        var args = data.arguments;
        Ext.each(Ext.ComponentQuery.query('speedcomponent'), function(control) {
            control.setSpeedUp(args.downloadSpeed);
            control.setSpeedDown(args.uploadSpeed);
        });
    },
    showSettingsDialog : function() {

        var dialog = Ext.create('Clutch.view.settings.SettingsDialog');
        dialog.show();
    },
    showTorrentAddedNotification : function(torrentdetails) { 
        Ext.create('widget.uxNotification', {
            title : 'Notification',
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : torrentdetails.name + ' added successfully.',
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();

    }
});