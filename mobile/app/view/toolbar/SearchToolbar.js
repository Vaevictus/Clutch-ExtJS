Ext.define('mobile.view.toolbar.SearchToolbar', {

    extend : 'Ext.Toolbar',

    alias : 'widget.searchtoolbar',

    ui : 'neutral',

    docked : 'top',

    scrollable : false,

    defaults : {

        iconMask : true,

        ui : 'plain'

    },

    config : {
        items : [{
            xtype : 'searchfield',
            itemId : 'searchBox'
        }, {
            itemId : 'btnGo',
            text : 'Go'
        }, {
            itemId : 'btnDownloadSelected',
            text : 'Download Selected'
        }],

        layout : {
            pack : 'center',
            align : 'center'
        }
    }

});
