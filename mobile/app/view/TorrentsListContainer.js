Ext.define('mobile.view.TorrentsListContainer', {

    extend : 'Ext.Container',

    alias : 'widget.torrentslistcontainer',
    
    requires : ['mobile.view.toolbar.TorrentsToolbar'],

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

            xtype : 'list',
            
            ui : 'round',
            
            pinHeaders : false,
            
            grouped : false,

            itemId : 'torrentslist',

            loadingText : false,

            itemTpl : "{name}  - {rateDownload}",

            store : this.getTorrentsStore(),
            
            onItemDisclosure : Ext.emptyFn //handled by the controller
            

        });
    }
});
