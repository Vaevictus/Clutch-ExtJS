
Ext.define('Clutch.model.TorrentFiles', {
    extend : 'Ext.data.Model',
    fields : [{
        name: 'bytesCompleted',
        type : 'number'
    },
    {
        name: 'name',
        type : 'string'
    },{
        name: 'priority',
        type : 'number'
    },{
        name: 'wanted',
        type : 'bool'
    },
    {
        name : 'sizeBytes',
        mapping : 'length'
    },
    {
        name: 'fileIndex',
        type: 'number'
    },
    {
        name : 'torrentId',
        type : 'number'
    },
    {
        name : 'percentComplete',
        type : 'number'
    }]
    // {
        // name : 'id',
        // type : 'string',
        // mapping : 'commentId'
    // },{
        // name : 'user',
        // type : 'string',
        // mapping : 'user'
//         
    // }]
});
