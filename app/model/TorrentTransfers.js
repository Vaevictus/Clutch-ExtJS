/**
 * @class NITB.model.MD_Notification
 * @extend Ext.data.Model
 * Data Model which contains all the informations related
 * to a single incoming Notification.
 */
Ext.define('Clutch.model.TorrentTransfers', {
    extend : 'Ext.data.Model',
    fields : [{
        name : 'addedDate',
        type : 'string'
    }, {
        name : 'bandwidthPriority',
        type : 'int'
    }, {
        name : 'error',
        type : 'string'
    }, {
        name : 'errorString',
        type : 'string'
    }, {
        name : 'eta',
        type : 'string'
    }, {
        name : 'haveUnchecked',
        type : 'string'
    }, {
        name : 'haveValid',
        type : 'string'
    }, {
        name : 'id',
        type : 'number'
    }, {
        name : 'leftUntilDone',
        type : 'string'
    }, {
        name : 'metadataPercentComplete',
        type : 'string'
    }, {
        name : 'name',
        type : 'string'
    }, {
        name : 'rateDownload',
        type : 'string'
    }, {
        name : 'rateUpload',
        type : 'string'
    }, {
        name : 'recheckProgress',
        type : 'string'
    }, {
        name : 'seedRatioLimit',
        type : 'string'
    }, {
        name : 'seedRatioMode',
        type : 'string'
    }, {
        name : 'sizeWhenDone',
        type : 'string'
    }, {
        name : 'seedRatioLimit',
        type : 'string'
    }, {
        name : 'status',
        type : 'string'
    }, {
        name : 'totalSize',
        type : 'string'
    }, {
        name : 'trackerStats', //todo - there is nesting here
        //type : 'object'
    }, {
        name : 'uploadRatio',
        type : 'auto'
    }, {
        name : 'uploadedEver',
        type : 'auto'
    },
    {
        name : 'peersConnected',
        type : 'number'
    },
     {
        name : 'seedsConnected',
        type : 'number'
    },
    {
        name : 'percentDone',
        type : 'number'
    }]
});
