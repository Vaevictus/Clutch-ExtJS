Ext.define('Clutch.store.TorrentTransfers', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.TorrentTransfers'],
    model : 'Clutch.model.TorrentTransfers',
    proxy : {
        type : 'memory'
    },
    type : 'json'
}); 