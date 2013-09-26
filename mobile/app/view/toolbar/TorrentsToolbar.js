Ext.define('mobile.view.toolbar.TorrentsToolbar', {

    extend : 'Ext.Toolbar',

    alias : 'widget.torrenttoolbar',

    ui : 'neutral',

    docked : 'top',

    scrollable : false,

    defaults : {

        iconMask : true,

        ui : 'plain'

    },

    config : {
        items : [{
            itemId : 'btnAdd',
            iconCls : 'add',
            //badgeText : 'Add Torrent'
        },
        {
            itemId : 'btnStart',
            iconCls : 'arrow_right',
            //text : 'Start'
        },{
            itemId : 'btnPause',
            iconCls : 'pause',
            //text : 'Stop'
        },
        {
            itemId : 'btnRemove',
            iconCls : 'delete',
            //text : 'Remove'
        }],

        layout : {
            pack : 'center',
            align : 'center'
        }
    }

});
