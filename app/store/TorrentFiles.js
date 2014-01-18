Ext.define('Clutch.store.TorrentFiles', {
    
    extend : 'Ext.data.Store',
    
    requires : ['Clutch.model.TorrentFiles'],
    
    model : 'Clutch.model.TorrentFiles',
    
    proxy : {
        type : 'memory'
    },
    
    type : 'json'
}); 