Ext.define('Clutch.store.SearchResult', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.SearchResult'],
    model : 'Clutch.model.SearchResult',
    proxy : {
        type : 'memory'
    },
    type : 'json'
}); 