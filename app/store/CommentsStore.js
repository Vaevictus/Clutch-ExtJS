Ext.define('Clutch.store.CommentsStore', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.Comment'],
    model : 'Clutch.model.Comment',
    proxy : {
        type : 'memory',
        reader : {
            type : 'json'
        }
    },
    type : 'json'
});
