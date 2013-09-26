Ext.define('Transmission.model.LowDetailTorrent', {

    extend : 'Ext.data.Model',

    config : {
        fields : [{
            name : 'downloadedEver',
            type : 'int'
        }, {
            name : 'eta',
            type : 'int'
        }, {
            name : 'id',
            type : 'int'
        }, {
            name : 'isFinished',
            type : 'boolean'
        }, {
            name : 'isPrivate',
            type : 'boolean'
        }, {
            name : 'metadataPercentComplete',
            type : 'int'
        }, {
            name : 'name',
            type : 'string'
        }, {
            name : 'peer-limit',
            type : 'int'
        }, {
            name : 'peersConnected',
            type : 'int'
        }, {
            name : 'percentDone',
            type : 'auto'
        }, {
            name : 'queuePosition',
            type : 'auto'
        }, {
            name : 'rateDownload',
            type : 'int'
        }, {
            name : 'rateUpload',
            type : 'int'
        }, {
            name : 'status',
            type : 'int'
        }, {
            name : 'totalSize',
            type : 'int'
        }, {
            name : 'uploadLimit',
            type : 'auto'
        }, {
            name : 'uploadLimited',
            type : 'auto'
        }

        /* BEGIN CALCULATED FIELDS BECAUSE TRANSMISSION-DAEOMON DOES NOT PROVIDE US WITH SEED SPEFICIFC PEER INFO*/
        // {
        // name : 'realPeers',
        //
        // convert : function(v, model) {
        //
        // var allPeers = model.get('peers'), nonSeeds = 0;
        //
        // Ext.each(allPeers, function(p) {
        //
        // if (p.progress < 1) {
        //
        // nonSeeds++;
        //
        // }
        // }, this);
        //
        // return nonSeeds;
        // }
        // }, {
        // name : 'realPeersSendingToUs',
        //
        // convert : function(v, model) {
        //
        // var allPeers = model.get('peers'), nonSeeds = 0;
        //
        // Ext.each(allPeers, function(p) {
        //
        // if (p.rateToClient > 0 && p.progress < 1) {
        //
        // nonSeeds++;
        //
        // }
        // }, this);
        //
        // return nonSeeds;
        // }
        // }, {
        // name : 'realSeeds',
        //
        // convert : function(v, model) {
        //
        // var allPeers = model.get('peers'), seeds = 0;
        //
        // Ext.each(allPeers, function(p) {
        //
        // if (p.progress === 1) {
        //
        // seeds++;
        //
        // }
        // }, this);
        //
        // return seeds;
        // }
        // }, {
        // name : 'realSeedsSendingToUs',
        //
        // convert : function(v, model) {
        //
        // var allPeers = model.get('peers'), seedsSendingToUs = 0;
        //
        // Ext.each(allPeers, function(p) {
        //
        // if (p.progress === 1 && p.rateToClient > 0) {
        //
        // seedsSendingToUs++;
        // }
        //
        // }, this);
        //
        // return seedsSendingToUs;
        // }
        // }]
        ]
    }

});

