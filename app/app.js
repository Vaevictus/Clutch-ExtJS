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
