Ext.define('Clutch.view.settings.SpeedChanger', {

    alias : 'widget.speedchanger',

    extend : 'Ext.container.Container',
    
    inject : 'rpcService',

    config : {
        value : undefined,
            
        rpcService : null        
    },

    items : [],

    initComponent : function(cfg) {
        this.callParent(arguments);
    },

    setValue : function(settings) {

        if (!settings)
            return;

        var btn = this.down('button'), slowMode = settings['alt-speed-enabled'];

        if (!btn) {//we have just received the initial settings
            this.add({
                text : this.getModeText(slowMode),
                icon : this.getModeIcon(slowMode), //,
                tooltip : this.getModeTooltip(slowMode), //
                xtype : 'button',
                scale : 'large',
                toggleHandler : this.onItemToggle,
                enableToggle : true,
                scope : this,
                pressed : settings['alt-speed-enabled']
            })
            return settings['alt-speed-enabled'];
        }

    },
    onItemToggle : function(btn, slowMode) {

        this.getRpcService().sessionSet({
            "alt-speed-enabled" : slowMode
        });
        var text = this.getModeText(slowMode), icon = this.getModeIcon(slowMode), tooltip = this.getModeTooltip(slowMode);

        btn.setText(text);
        btn.setIcon(icon);
        btn.setTooltip(tooltip);

    },
    getModeText : function(isSlow) {

        return (isSlow === true) ? 'Alternate mode is enabled' : 'Regular mode is enabled';
    },

    getModeIcon : function(isSlow) {

        return (isSlow === true) ? 'resources/images/slow_on.png' : 'resources/images/slow_off.png';
    },
    getModeTooltip : function(isSlow) {
        return (isSlow === true) ? 'Click to switch to regular speed limits' : 'Click to switch to alternate speed limits';
    }
    // //settings have been changed
    //
    // if (settings['alt-speed-enabled'] === oldSettings['alt-speed-enabled']) {
    // return settings['alt-speed-enabled'];
    // }
    // if (settings['alt-speed-enabled'] === true) {
    // var btn = this.down('button');
    // this.onItemToggle(btn, true, silent);
    // return settings['alt-speed-enabled'];
    // }
    // if (settings['alt-speed-enabled'] === false) {
    // var btn = this.down('button');
    // this.onItemToggle(btn, false, silent);
    // return settings['alt-speed-enabled'];
    // }

});
