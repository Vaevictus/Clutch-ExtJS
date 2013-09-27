Ext.define('mobile.store.SearchResult', {

    extend : 'Ext.data.Store',

    requires : ['PirateBay.model.SearchResult'],

    config : {
        model : 'PirateBay.model.SearchResult',
        proxy : {
            type : 'memory'
        }
    },
    type : 'json',
    
    grouper : function(record) {
        return record.get('name')[0];
    }
   

});
