Ext.define('mobile.view.TorrentsListContainer', {

    extend : 'Ext.Container',

    alias : 'widget.torrentslistcontainer',

    requires : ['mobile.view.toolbar.TorrentsToolbar', 'mobile.view.TorrentsList'],

    controller : 'mobile.controller.TorrentsListController',

    inject : ['torrentsStore'],

    config : {
        layout : 'fit',

        torrentsStore : null,

        items : [{
            xtype : 'torrenttoolbar',
            itemId : 'torrentToolbar'

        }]
    },

    initialize : function() {

        this.callParent(arguments);

        this.add({
            xtype : 'torrentslist',
            store : this.getTorrentsStore()
        });
    }
});
