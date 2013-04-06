Ext.define('Clutch.store.SearchResult', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.SearchResult'],
    model : 'Clutch.model.SearchResult',
    proxy : {
        type : 'memory',
        reader: {
            type: 'json',
            root : ''
            //useSimpleAccessors: true
        }
    },
    type : 'json'
}); 