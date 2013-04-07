Ext.define('Clutch.view.search.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.searchresultdetailspanel',

    requires : ['Clutch.view.search.properties.ResultInfo', 'Clutch.view.search.properties.CommentsGrid'],

    title : 'Details',

    items : [{
        xtype : 'searchresultinfo',
        title : 'Info'
    },{
        xtype : 'commentsgrid',
        title : 'Comments'
    }],

    setValue : function(searchResult) {
   
         this.setTitle('Details: ' + searchResult.get('name'));
         this.down('searchresultinfo').setValue(searchResult);
         this.down('commentsgrid').setValue(searchResult.get('comment_url'));
        
    }
});
