Ext.application({
    controllers : ['Main', 'TorrentsController'],

    //views : ["Main"],

    name : 'Clutch',

    autoCreateViewport : true,

    requires : ['Clutch.util.RPC'],

    launch : function() {

        Ext.tip.QuickTipManager.init();

        Clutch.util.RPC.startTorrentsCheckTask();

    }
});

Ext.util.Format.fileSize = function(value) {
    if (value > 1) {
        var s = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var e = Math.floor(Math.log(value) / Math.log(1024));
        if (e > 0)
            return (value / Math.pow(1024, Math.floor(e))).toFixed(2) + " " + s[e];
        else
            return value + " " + s[e];
    } else if (value === 1) {
        return "1 Byte";
    }
    return '-';
}; 