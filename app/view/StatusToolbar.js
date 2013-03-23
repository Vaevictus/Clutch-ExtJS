Ext.define("Clutch.view.StatusToolbar", {
    extend : 'Ext.toolbar.Toolbar',

    alias : 'widget.statustoolbar',
    border : false,
    items : ['->', {

        xtype : 'tbtext',
        text : 'status'
    }]

}); 