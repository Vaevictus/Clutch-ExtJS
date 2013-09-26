Ext.define('Clutch.store.PeersStore', {
    
    extend : 'Ext.data.Store',
    
    requires : ['Transmission.model.Peer'],
    
    model : 'Transmission.model.Peer',
    
    proxy : {
    
        type : 'memory'
    
    },
    
    type : 'json'
}); 