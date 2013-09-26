Ext.define('mobile.view.SearchListContainer', {

    extend : 'Ext.Container',

    alias : 'widget.searchlistcontainer',
    
    requires : ['mobile.view.toolbar.SearchToolbar'],

    controller : 'mobile.controller.SearchController',

    inject : ['searchStore'],

    config : {

        layout : 'fit',

        searchStore : null,

        items : [{
            xtype : 'searchtoolbar',
            itemId : 'searchToolbar'
            
        }]
    },

    initialize : function() { 
        
        this.callParent(arguments);

        this.add({

            xtype : 'list',
            
            ui : 'round',
            
            pinHeaders : false,
            
            grouped : false,

            itemId : 'searchlist',

            //loadingText : 'loading...',

            itemTpl : "{name} - [S {seeds}/L {leechers}]",

            store : this.getSearchStore(),
            
            onItemDisclosure : Ext.emptyFn //handled by the controller
            

        });
    }
});
