Ext.application({
    controllers : ['Main', 'TorrentsController', 'SettingsController', 'StatsController', 'SearchController'],

    //views : ["Main"],

    name : 'Clutch',

    autoCreateViewport : true,

    requires : ['Clutch.util.RPC', 'Clutch.util.RottenTomatoes'],

    launch : function() {

        Ext.tip.QuickTipManager.init();
        Ext.QuickTips.init();
        
        /* Fixes a bug in Extjs 4.2 - see http://www.sencha.com/forum/showthread.php?260106-Tooltips-on-forms-and-grid-are-not-resizing-to-the-size-of-the-text/page3#24*/
        delete Ext.tip.Tip.prototype.minWidth;

        if (Ext.isIE10) {
            Ext.supports.Direct2DBug = true;
        }

        Clutch.util.RPC.startTorrentsCheckTask();
        Clutch.util.RPC.getInitialSettings();

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

Ext.util.Format.secondsToWords = function(seconds) {

    var numyears = Math.floor(seconds / 31536000);
    if (numyears) {
        return numyears + ' year' + ((numyears > 1) ? 's' : '');
    }
    var numdays = Math.floor((seconds % 31536000) / 86400);
    if (numdays) {
        return numdays + ' day' + ((numdays > 1) ? 's' : '');
    }
    var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
    if (numhours) {
        return numhours + ' hour' + ((numhours > 1) ? 's' : '');
    }
    var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
    if (numminutes) {
        return numminutes + ' minute' + ((numminutes > 1) ? 's' : '');
    }
    var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
    if (numseconds) {
        return numseconds + ' second' + ((numseconds > 1) ? 's' : '');
    }
    return 'less then a second';

};
