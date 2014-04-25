


Ext.define("Clutch.view.MainToolbar", {
    extend : 'Ext.toolbar.Toolbar',

    controller : 'Clutch.controller.MainToolbarController',
    
    alias : 'widget.torrenttoolbar',

    border : false,

    frame : false,
	


    items : [{

        xtype : 'splitbutton',
        text : 'Add torrent',
        scale : 'large',
        rowspan : 3,
        iconCls : 'add',
        iconAlign : 'top',
        arrowAlign : 'right',
        action : 'add-url',
        menu : [{
            text : 'Add via URL',
            itemId : 'btnAddViaUrl',
            iconCls : 'add'
        }, {
            text : 'Upload .torrent file',
            itemId : 'btnUploadTorrent',
            iconCls : 'add'
        }]
    }, {
        xtype : 'splitbutton',
        text : 'Remove',
        scale : 'large',
        rowspan : 3,
        iconCls : 'remove',
        iconAlign : 'top',
        arrowAlign : 'right',
        action : 'remove-selected',
        menu : [{
            text : 'Remove selected',
            itemId : 'btnRemoveSelected',
            iconCls : 'remove-small',
            action : 'remove-selected'
        }, {
            text : 'Remove all',
            itemId : 'btnRemoveAll',
            iconCls : 'remove-small',
            action : 'remove-all'
        }, {
            text : 'Remove finished',
            itemId : 'btnRemoveFinished',
            iconCls : 'remove-small',
            action : 'remove-finished'
        }]
    }, {
        xtype : 'splitbutton',
        text : 'Pause',
        scale : 'large',
        rowspan : 3,
        itemId : 'btnPause',
        iconAlign : 'top',
        arrowAlign : 'right',
        iconCls : 'pause',
        action : 'pause-selected',
        menu : [{
            text : 'Pause All',
            itemId : 'btnPauseAll',
            iconCls : 'pause',
            action : 'pause-all'
        }]
    }, {
        xtype : 'splitbutton',
        text : 'Resume',
        itemId : 'btnResume',
        scale : 'large',
        rowspan : 3,
        iconAlign : 'top',
        arrowAlign : 'right',
        iconCls : 'resume',
        action : 'resume-selected',
        menu : [{
            text : 'Resume All',
            itemId : 'btnResumeAll',
            iconCls : 'resume-all',
            action : 'resume-all'
        }]
    }, 
	{
        xtype : 'splitbutton',
        text : 'Themes',
        itemId : 'btnThemes',
        scale : 'large',
        rowspan : 3,
        iconAlign : 'top',
        arrowAlign : 'right',
        iconCls : 'themes',
        menu : [
			{ text: 'Default', handler: function(){ Ext.util.Themes.applyTheme("ext/resources/css/ext-all.css"); } },
			// Theme::Gray
			{ text: 'Gray', handler: function(){ Ext.util.Themes.applyTheme("ext/resources/css/ext-all-gray.css"); } },
			// Theme::Access
			{ text: 'Access', handler: function(){ Ext.util.Themes.applyTheme("ext/resources/css/ext-all-access.css"); } },
		]
    },
	'->', {
        text : 'Statistics',
        itemId : 'btnStatistics',
        iconCls : 'info',
        scale : 'large',
        rowspan : 3,
        iconAlign : 'top',
        arrowAlign : 'right',
        action : 'show-statistics'

    }, {
        text : 'Settings',
        itemId : 'btnSettings',
        iconCls : 'settings',
        scale : 'large',
        rowspan : 3,
        iconAlign : 'top',
        arrowAlign : 'right',
        action : 'show-settings'

    }]
});
