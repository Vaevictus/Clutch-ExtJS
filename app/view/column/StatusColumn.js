Ext.define('Clutch.view.column.StatusColumn', {
    extend : 'Ext.grid.column.Column',
    
    inject : ['rpcService'],
    
    config : {
        rpcService : null
    },

    alias : 'widget.torrentstatuscolumn',

    renderer : function(value) {
        return this.getRpcService().parseTorrentState(value);
    }
});

// typedef enum
// {
// TR_STATUS_STOPPED        = 0, /* Torrent is stopped */
// TR_STATUS_CHECK_WAIT     = 1, /* Queued to check files /*
// TR_STATUS_CHECK          = 2, /* Checking files */
// TR_STATUS_DOWNLOAD_WAIT  = 3, /* Queued to download */
// TR_STATUS_DOWNLOAD       = 4, /* Downloading */
// TR_STATUS_SEED_WAIT      = 5, /* Queued to seed */
// TR_STATUS_SEED           = 6  /* Seeding */
// }