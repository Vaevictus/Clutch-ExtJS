//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'mobile': 'app',
    'Clutch' : '/transmission/web/app/',
    'Deft': 'packages/deft/src/js',
    'PirateBay' : 'packages/piratebay',
    'Transmission' : 'packages/transmissionrpc'
    
});
Ext.syncRequire(['Deft.mixin.Injectable','Deft.mixin.Controllable']);
//</debug>

//@require Deft.mixin.Injectable
//@require Deft.mixin.Controllable

Ext.application({
    name: 'mobile',

    requires: [
        'Transmission.RPC'
    ],

    views: ['Main'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        
         Deft.Injector.configure({
             
            torrentsStore: 'mobile.store.TorrentTransfers',
            
            searchStore: 'mobile.store.SearchResult',
                      
            searchService : 'PirateBay.Search',
            
            rpcService : 'Transmission.RPC'
        
        });
        
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('mobile.view.Main'));
        
         // mobile.util.RPC.startTorrentsCheckTask();
         // mobile.util.RPC.getInitialSettings();
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
