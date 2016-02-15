Ext.define('Clutch.controller.MainToolbarController', {

    extend : 'Deft.mvc.ViewController',

    inject : ['torrentsGrid', 'rpcService', 'contextMenu'],

    config : {

        torrentsGrid : null,

        rpcService : null,

        contextMenu : null

    },
    observe : {
        rpcService : {
            torrentadded : 'onTorrentAdded',
            torrentsstarted : 'onTorrentStarted',
            torrentsstopped : 'onTorrentStopped',
            torrentsremoved : 'onTorrentRemoved',
            settingschanged : 'onSettingsChanged'
        },
        contextMenu : {
            click : 'onContextMenuClick'
        }
    },

    control : {

        splitBtnResumeSelected : {
            selector : 'splitbutton[action=resume-selected]',
            listeners : {
                click : 'resumeSelectedTorrents'
            }
        },

        menuItemResumeAll : {
            selector : 'menuitem[action=resume-all]',
            listeners : {
                click : 'resumeAllTorrents'
            }
        },

        splitBtnPauseSelected : {
            selector : 'splitbutton[action=pause-selected]',
            listeners : {
                click : 'pauseSelectedTorrents'
            }
        },

        menuItemPauseAll : {
            selector : 'menuitem[action=pause-all]',
            listeners : {
                click : 'pauseAllTorrents'
            }
        },

        menuItemRemoveFinished : {
            selector : 'menuitem[action=remove-finished]',
            listeners : {
                click : 'removeFinishedTorrents'
            }
        },

        menuItemRemoveSelected : {
            selector : 'menuitem[action=remove-selected]',
            listeners : {
                click : 'removeSelectedTorrents'
            }
        },

        menuItemRemoveAll : {
            selector : 'menuitem[action=remove-all]',
            listeners : {
                click : 'removeAllTorrents'
            }
        },

        menuItemAddViaUrl : {
            selector : '#btnAddViaUrl',
            listeners : {
                click : 'showAddTorrentUrlDialog'
            }
        },

        btnAddViaUrl : {
            selector : 'splitbutton[text=Add torrent]',
            listeners : {
                click : 'showAddTorrentUrlDialog'
            }
        },
			
		btnUploadTorrent : {
            listeners : {
                click : 'showAddTorrentFileDialog'
            }
        },	

        btnShowSettings : {
            selector : 'button[action=show-settings]',
            listeners : {
                click : 'showSettingsDialog'
            }
        },
        btnShowStatistics : {
            selector : 'button[action=show-statistics]',
            listeners : {
                click : 'showStatisticsDialog'
            }
        }

    },

    onContextMenuClick : function(menu, item, e, eOpts) {
        debugger;
        var grid = this.getTorrentsGrid();

        if (!item) {
            return;
        }

        switch (item.action) {
            case 'start':
                this.resumeSelectedTorrents();
                break;
            case 'remove':
                this.removeSelectedTorrents();
                break;
            case 'pause':
                this.pauseSelectedTorrents();
                break;
            case 'throttle':
                this.throttleSelectedTorrents();
                break
            case 'verify':
                this.verifySelectedTorrents();
                break
        }
    },

    showAddTorrentUrlDialog : function(item) {
        Ext.create("Clutch.view.torrent.AddTorrentDialog", {

        }).show();
    },
		
	showAddTorrentFileDialog : function(item) {
        Ext.create("Clutch.view.torrent.AddTorrentFileDialog", {

        }).show();
    },

    showSettingsDialog : function() {

        var dialog = Ext.create('Clutch.view.settings.SettingsDialog');
        dialog.show();
        //dialog.changeActiveItem(1);
    },

    showStatisticsDialog : function() {

        var dialog = Ext.create('Clutch.view.statistics.StatsDialog', {

        });
        dialog.show();

    },

    removeAllTorrents : function() {

        var grid = this.getTorrentsGrid();
        grid.removeAllTorrents();

    },

    removeSelectedTorrents : function() {
        var grid = this.getTorrentsGrid();
        grid.removeSelectedTorrents();

    },

    removeFinishedTorrents : function() {
        var grid = this.getTorrentsGrid();
        grid.removeFinishedTorrents();
    },

    pauseAllTorrents : function() {

        var grid = this.getTorrentsGrid();
        grid.pauseAllTorrents();
    },

    pauseSelectedTorrents : function() {

        var grid = this.getTorrentsGrid();
        grid.pauseSelectedTorrents();
    },

    resumeSelectedTorrents : function() {
        var grid = this.getTorrentsGrid();

        grid.startSelectedTorrents();

    },

    resumeAllTorrents : function() {
        var grid = this.getTorrentsGrid();

        grid.startAllTorrents();

    },

    onTorrentStopped : function(uselessInfo) {

        this.notify('Notification', 'Torrent(s) stopped successfully.');

    },

    onTorrentStarted : function(uselessInfo) {

        this.notify('Notification', 'Torrent(s) started successfully.');

    },

    onTorrentRemoved : function(torrentDetails) {

        this.notify('Notification', 'Torrent(s) removed successfully.');

    },

    onTorrentAdded : function(rpcResponse) {

        if (!rpcResponse.arguments['torrent-added']) {
            this.notify('Error', rpcResponse.result)
            return;
        }
        this.notify('Torrent Added', rpcResponse.arguments['torrent-added'].name + '<br> added successfully.');

    },
    
    onSettingsChanged : function(todo){
        this.notify('Settings', 'Settings changed successfully');
    },

    notify : function(title, message) {
        Ext.create('widget.uxNotification', {
            title : title,
            position : 't',
            manager : 'instructions',
            cls : 'ux-notification-light',
            iconCls : 'ux-notification-icon-information',
            html : message,
            autoCloseDelay : 4000,
            slideBackDuration : 500,
            slideInAnimation : 'bounceOut',
            slideBackAnimation : 'easeIn'
        }).show();
    }
});
