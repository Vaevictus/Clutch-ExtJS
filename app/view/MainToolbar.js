Ext.define("Clutch.view.MainToolbar", {
    extend : 'Ext.toolbar.Toolbar',

    alias : 'widget.torrenttoolbar',
    //config: [],
    border : false,
    
    frame : false,

    items : [{
        xtype : 'buttongroup',
        columns : 5,
        frame : false,
        defaults : {
            border : false

        },

        items : [{

            xtype : 'splitbutton',
            text : 'Add torrent',
            scale : 'large',
            rowspan : 3,
            iconCls : 'add',
            iconAlign : 'top',
            arrowAlign : 'right',
            //cls : 'x-btn-as-arrow',
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
            menu : [{
                text : 'Resume All',
                itemId : 'btnResumeAll',
                iconCls : 'resume-all',
                action : 'resume-all'
            }]
        }]

    }, '->', {
        xtype : 'buttongroup',
        frame : false,
        columns : 3,
        defaults : {
            border : false

        },
        items : [{
            text : 'Filter',
            itemId : 'btnFilter',
            iconCls : 'filter',
            scale : 'large',
            rowspan : 3,
            iconAlign : 'top',
            arrowAlign : 'right'
        }, {
            text : 'Inspector',
            itemId : 'btnInspector',
            iconCls : 'info',
            scale : 'large',
            rowspan : 3,
            iconAlign : 'top',
            arrowAlign : 'right'

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

    }]

});
