Ext.define('Clutch.view.column.StatusColumn', {
    extend : 'Ext.grid.column.Column',

    alias : 'widget.torrentstatuscolumn',

    renderer : function(value) {
        var v;
       
        switch (value) {
            case 0:
                v = "Stopped";
                break;
            case 1:
                v = "Waiting Check";
                break;
            case 2:
                v = "Checking";
                break;
            case 3:
                v = "Queued Download";
                break;
            case 4:
                v = "Downloading";
                break;
            case 5:
                v = "Queued Seed";
                break;
            case 6:
                v = "Seeding";
                break;
            default:
                v = "Unknown";
                break;

        }
        return v;
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