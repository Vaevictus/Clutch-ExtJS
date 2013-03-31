Ext.define('Clutch.view.column.TorrentProgressColumn', {
    extend : 'Ext.grid.column.Column',

    alias : 'widget.torrentprogresscolumn',

    renderer : function(v, m, r) {

        var tmpValue = Math.round(v * 10000) / 100;
        //rounds the number to 0-100 with 2 decimal places
        var tmpText = tmpValue + '%';

        var progressRenderer = (function(pValue, pText) {
            var b = new Ext.ProgressBar();
            return function(pValue, pText) {
                b.updateProgress(pValue, pText, true);
                return Ext.DomHelper.markup(b.getRenderTree());
            };
        })(tmpValue, tmpText);
        return progressRenderer(v, tmpText);
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