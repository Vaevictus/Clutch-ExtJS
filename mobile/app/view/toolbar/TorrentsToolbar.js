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
            text : 'Add'
            //iconCls : 'add',
            //badgeText : 'Add Torrent'
        },
        {
            itemId : 'btnStart',
            text : 'Start'
            //iconCls : 'arrow_right',
            //text : 'Start'
        },{
            itemId : 'btnPause',
           // iconCls : 'pause',
              text : 'Stop'
            //text : 'Stop'
        },
        {
            itemId : 'btnRemove',
            //iconCls : 'delete',
            text : 'Remove'
        }],

        layout : {
            pack : 'center',
            align : 'center'
        }
    }

});
