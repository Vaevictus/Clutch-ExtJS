Ext.define('Clutch.view.search.SearchToolbar', {

    requires : 'Clutch.view.search.SearchField',

    alias : 'widget.searchtoolbarbase',

    extend : 'Ext.toolbar.Toolbar',

    config : {
        searchEmptyText : 'Search for torrents'
    },
    items : [{
        xtype : 'searchfield',
        width : 200
    }, {
        xtype : 'button',
        text : 'Go',
        itemId : 'gobutton'
    }, {
        xtype : 'button',
        text : 'Download Selected'
    }],

    constructor : function(cfg) {
       
         this.callParent(arguments);
         this.initConfig(cfg);
    },

    applySearchEmptyText : function(v, oldValue) {
        var field = this.down('searchfield')
        field.emptyText = v;
        field.applyEmptyText(v);
    }
});

//emptyText : 'Search The Pirate Bay',
