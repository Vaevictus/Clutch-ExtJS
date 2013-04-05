Ext.define('Clutch.store.TrackerStore', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.Tracker'],
    model : 'Clutch.model.Tracker',
    proxy : {
        type : 'memory'
    },
    type : 'json'
}); 