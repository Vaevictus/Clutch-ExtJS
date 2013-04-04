Ext.define('Clutch.store.PeersStore', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.Peer'],
    model : 'Clutch.model.Peer',
    proxy : {
        type : 'memory'
    },
    type : 'json'
}); 