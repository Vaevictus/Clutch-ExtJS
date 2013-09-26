Ext.define("Clutch.view.settings.SettingsDialog", {

    extend : 'Ext.window.Window',
    
    controller : 'Clutch.controller.SettingsController',

    requires : ['Clutch.view.settings.GeneralSettings', 'Clutch.view.settings.PeerSettings', 'Clutch.view.settings.TransfersSettings', 'Clutch.view.settings.NetworkSettings'],

    title : 'Settings',

    constrain : true,

    alias : 'widget.settingsdialog',

    layout : 'border',

    modal : true,

    config : {
        cards : ['widget.generalsettings', 'widget.peersettings','widget.networksettings', 'widget.transferssettings']
    },
    width : 600,

    height : 600,

    items : [{
        xtype : 'treepanel',
        region : 'west',
        width : 150,
        rootVisible : false,
        root : {
            children : []
        }
    }, {
        xtype : 'panel',
        itemId : 'cardcontainer',
        layout : 'card',
        region : 'center'

    }],

    buttons : [{
        text : 'Save',
        action : 'save'
    }, {
        text : 'Close',
        action : 'cancel'
    }],

    constructor : function(config) {
        this.callParent(arguments);
        this.initConfig(config);
        this.showFirstCard();
    },

    applyCards : function(panels, oldValue) {

        var container = this.down('#cardcontainer');

        Ext.each(panels, function(panelName) {

            var root = this.down('treepanel').getRootNode(), createdPanel = Ext.createByAlias(panelName, {
                itemId : panelName
            });

            root.appendChild({
                text : createdPanel.title,
                panel : createdPanel
            });

            container.add(createdPanel);

        }, this);
        
        
        
        return panels;
    },

    showFirstCard : function() {
        
        this.getController().onShowSettingsCard(this.down('#cardcontainer').getLayout().getActiveItem()); //TODO work around this hack, settings are not auto loaded for the first card as the activate event iss not firing
    },

    changeActiveItem : function(card) {

        var layout = this.down('#cardcontainer').getLayout();

        layout.setActiveItem(card);
    },

    
});
/*
 Session Requests
 442
 443 4.1.  Session Arguments
 444
 445    string                           | value type | description
 446    ---------------------------------+------------+-------------------------------------
 447    "alt-speed-down"                 | number     | max global download speed (KBps)
 448    "alt-speed-enabled"              | boolean    | true means use the alt speeds
 449    "alt-speed-time-begin"           | number     | when to turn on alt speeds (units: minutes after midnight)
 450    "alt-speed-time-enabled"         | boolean    | true means the scheduled on/off times are used
 451    "alt-speed-time-end"             | number     | when to turn off alt speeds (units: same)
 452    "alt-speed-time-day"             | number     | what day(s) to turn on alt speeds (look at tr_sched_day)
 453    "alt-speed-up"                   | number     | max global upload speed (KBps)
 454    "blocklist-url"                  | string     | location of the blocklist to use for "blocklist-update"
 455    "blocklist-enabled"              | boolean    | true means enabled
 456    "blocklist-size"                 | number     | number of rules in the blocklist
 457    "cache-size-mb"                  | number     | maximum size of the disk cache (MB)
 458    "config-dir"                     | string     | location of transmission's configuration directory
 459    "download-dir"                   | string     | default path to download torrents
 460    "download-queue-size"            | number     | max number of torrents to download at once (see download-queue-enabled)
 461    "download-queue-enabled"         | boolean    | if true, limit how many torrents can be downloaded at once
 462    "dht-enabled"                    | boolean    | true means allow dht in public torrents
 463    "encryption"                     | string     | "required", "preferred", "tolerated"
 464    "idle-seeding-limit"             | number     | torrents we're seeding will be stopped if they're idle for this long
 465    "idle-seeding-limit-enabled"     | boolean    | true if the seeding inactivity limit is honored by default
 466    "incomplete-dir"                 | string     | path for incomplete torrents, when enabled
 467    "incomplete-dir-enabled"         | boolean    | true means keep torrents in incomplete-dir until done
 468    "lpd-enabled"                    | boolean    | true means allow Local Peer Discovery in public torrents
 469    "peer-limit-global"              | number     | maximum global number of peers
 470    "peer-limit-per-torrent"         | number     | maximum global number of peers
 471    "pex-enabled"                    | boolean    | true means allow pex in public torrents
 472    "peer-port"                      | number     | port number
 473    "peer-port-random-on-start"      | boolean    | true means pick a random peer port on launch
 474    "port-forwarding-enabled"        | boolean    | true means enabled
 475    "queue-stalled-enabled"          | boolean    | whether or not to consider idle torrents as stalled
 476    "queue-stalled-minutes"          | number     | torrents that are idle for N minuets aren't counted toward seed-queue-size or download-queue-size
 477    "rename-partial-files"           | boolean    | true means append ".part" to incomplete files
 478    "rpc-version"                    | number     | the current RPC API version
 479    "rpc-version-minimum"            | number     | the minimum RPC API version supported
 480    "script-torrent-done-filename"   | string     | filename of the script to run
 481    "script-torrent-done-enabled"    | boolean    | whether or not to call the "done" script
 482    "seedRatioLimit"                 | double     | the default seed ratio for torrents to use
 483    "seedRatioLimited"               | boolean    | true if seedRatioLimit is honored by default
 484    "seed-queue-size"                | number     | max number of torrents to uploaded at once (see seed-queue-enabled)
 485    "seed-queue-enabled"             | boolean    | if true, limit how many torrents can be uploaded at once
 486    "speed-limit-down"               | number     | max global download speed (KBps)
 487    "speed-limit-down-enabled"       | boolean    | true means enabled
 488    "speed-limit-up"                 | number     | max global upload speed (KBps)
 489    "speed-limit-up-enabled"         | boolean    | true means enabled
 490    "start-added-torrents"           | boolean    | true means added torrents will be started right away
 491    "trash-original-torrent-files"   | boolean    | true means the .torrent file of added torrents will be deleted
 492    "units"                          | object     | see below
 493    "utp-enabled"                    | boolean    | true means allow utp
 494    "version"                        | string     | long version string "$version ($revision)"
 495    ---------------------------------+------------+-----------------------------+
 496    units                            | object containing:                       |
 497                                     +--------------+--------+------------------+
 498                                     | speed-units  | array  | 4 strings: KB/s, MB/s, GB/s, TB/s
 499                                     | speed-bytes  | number | number of bytes in a KB (1000 for kB; 1024 for KiB)
 500                                     | size-units   | array  | 4 strings: KB/s, MB/s, GB/s, TB/s
 501                                     | size-bytes   | number | number of bytes in a KB (1000 for kB; 1024 for KiB)
 502                                     | memory-units | array  | 4 strings: KB/s, MB/s, GB/s, TB/s
 503                                     | memory-bytes | number | number of bytes in a KB (1000 for kB; 1024 for KiB)
 504                                     +--------------+--------+------------------+
 505
 506    "rpc-version" indicates the RPC interface version supported by the RPC server.
 507    It is incremented when a new version of Transmission changes the RPC interface.
 508
 509    "rpc-version-minimum" indicates the oldest API supported by the RPC server.
 510    It is changes when a new version of Transmission changes the RPC interface
 511    in a way that is not backwards compatible.  There are no plans for this
 512    to be common behavior.
 513
 514 4.1.1.  Mutators
 515
 516    Method name: "session-set"
 517    Request arguments: one or more of 4.1's arguments, except: "blocklist-size",
 518                       "config-dir", "rpc-version", "rpc-version-minimum", and
 519                       "version"
 520    Response arguments: none
 521
 522 4.1.2.  Accessors
 523
 524    Method name: "session-get"
 525    Request arguments: none
 526    Response arguments: all of 4.1's arguments
 */