Ext.define('mobile.store.TorrentTransfers', {

    extend : 'Ext.data.Store',

    requires : ['Transmission.model.LowDetailTorrent'],

    config : {
        model : 'Transmission.model.LowDetailTorrent',
        proxy : {
            type : 'memory'
        }
    },
    type : 'json',
    
    grouper : function(record) {
        return record.get('name')[0];
    },
    
    sorters : 'name'
    

});
