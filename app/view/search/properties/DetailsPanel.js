Ext.define('Clutch.view.search.properties.DetailsPanel', {

    extend : 'Ext.tab.Panel',

    alias : 'widget.searchresultdetailspanel',

    requires : ['Clutch.view.search.properties.ResultInfo'],

    title : 'Details',

    items : [{
        xtype : 'searchresultinfo',
        title : 'Info'
    }],

    setValue : function(searchResult) {
   
        // this.setTitle('Details: ' + torrentData.get('name'));
         this.down('searchresultinfo').setValue(searchResult);
        // this.down('trackersgrid').setValue(torrentData.get('trackerStats'));
        // this.down('peersgrid').setValue(torrentData.get('peers'));
    }
});
