Ext.define('Clutch.store.TorrentTransfers', {
    
    extend : 'Ext.data.Store',
    
    requires : ['Transmission.model.Torrent'],
    
    model : 'Transmission.model.Torrent',
    
    proxy : {
        type : 'memory'
    },
    
    type : 'json'
}); 