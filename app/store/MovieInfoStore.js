Ext.define('Clutch.store.MovieInfoStore', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.MovieInfo'],
    model : 'Clutch.model.MovieInfo',
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