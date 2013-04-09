Ext.define('Clutch.view.search.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.searchresultdetailspanel',

    requires : ['Clutch.view.search.properties.ResultInfo', 'Clutch.view.search.properties.CommentsGrid'],

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
    }],

    setValue : function(searchResult) {

        this.setTitle('Details: ' + searchResult.get('name'));
        this.down('searchresultinfo').setValue(searchResult);
        debugger;
        this.down('commentsgrid').setValue(searchResult.get('commentsLink'));

    }
});
