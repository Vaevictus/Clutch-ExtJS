Ext.define('Clutch.view.search.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.searchresultdetailspanel',

    requires : ['Clutch.view.search.properties.ResultInfo', 'Clutch.view.search.properties.CommentsGrid', 'Clutch.view.search.properties.MovieInfo'],

    title : 'Details',

    collapsed : true,

    collapsible : true,

    config : {

        hideComments : false

    },

    split : true,

    width : 400,

    items : [{
        xtype : 'searchresultinfo',
        title : 'Info'
    }, {
        xtype : 'commentsgrid',
        title : 'Comments'
    }, {
        xtype : 'movieinfo',
        title : 'Movie Information'
    }],

    constructor : function(cfg) {
        
        this.callParent(arguments);
        
        this.initConfig(cfg);
    },

    applyHideComments : function(v, oldValue) {
        
        if (v === true) { 
        
            this.remove(this.down('commentsgrid'));
        
        }
    },

    setValue : function(searchResult) {

        var commentsGrid = this.down('commentsgrid');
        
        this.setTitle('Details: ' + searchResult.get('name'));
        
        this.down('searchresultinfo').setValue(searchResult);
        
        if (commentsGrid) {

            commentsGrid.setValue(searchResult.get('commentsLink'));
        }
        
        this.down('movieinfo').setTorrentSearchResult(searchResult);
    }
});
