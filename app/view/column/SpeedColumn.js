Ext.define('Clutch.view.column.SpeedColumn', {
    extend : 'Ext.grid.column.Column',

    alias : 'widget.speedcolumn',

    renderer : function(v, m, r) {
            var value = Ext.util.Format.fileSize(v);
            return value !== '-' ? value + '/sec' : value;
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