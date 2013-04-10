Ext.define('Clutch.view.search.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.searchresultdetailspanel',

    requires : ['Clutch.view.search.properties.ResultInfo', 'Clutch.view.search.properties.CommentsGrid','Clutch.view.search.properties.MovieInfo'],

    title : 'Details',

    collapsed : true,

    collapsible : true,

    split : true,

    width : 400,

    items : [{
        xtype : 'searchresultinfo',
        title : 'Info'
    }, {
        xtype : 'commentsgrid',
        title : 'Comments'
    },{
        xtype : 'movieinfo',
        title : 'Movie Information'
    }],

    setValue : function(searchResult) {

        this.setTitle('Details: ' + searchResult.get('name'));
        this.down('searchresultinfo').setValue(searchResult);
        this.down('commentsgrid').setValue(searchResult.get('commentsLink'));
        this.down('movieinfo').setTorrentSearchResult(searchResult);
    }
});
