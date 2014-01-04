Ext.define('mobile.view.Main', {

    extend : 'Ext.Container',

    alias : 'widget.mainnav',

    requires : ['Deft.mixin.Controllable', 'Deft.mixin.Injectable', 'mobile.view.BottomTabs'],

    config : {
        layout : 'card',
        items : [{
            xtype : 'tabpanel'
            //  title: 'Torrents'
        }]

    }
});
