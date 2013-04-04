Ext.define('Clutch.store.TorrentTransfers', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.Torrent'],
    model : 'Clutch.model.Torrent',
    proxy : {
        type : 'memory'
    },
    type : 'json'
}); 