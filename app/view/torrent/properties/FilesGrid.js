Ext.define('Clutch.view.torrent.properties.FilesGrid', {

    extend : 'Ext.grid.Panel',

    requires : ['Clutch.store.TorrentFiles'],

    inject : ['rpcService'],
    
    alias : 'widget.filesgrid',

    items : [],

    config : {
        value : []
    },
    
    columns : [
     {
       header : 'Wanted',
       xtype : 'checkcolumn',
       dataIndex: 'wanted',
       itemId: 'checkcolumn'
     },
    {
        header : 'File Name',
        flex : 1,
        dataIndex : 'name'
    },{
        header : 'Size',
        xtype : 'sizecolumn',
        dataIndex : 'sizeBytes'
    } ,{
        header : 'Progress',
        xtype : 'torrentprogresscolumn',
        dataIndex : 'percentComplete'
    },{
        header : 'Priority',
        dataIndex: 'priority'
    }],

    store : Ext.create('Clutch.store.TorrentFiles'),

    initComponent: function() {
      
      this.callParent(arguments);  
      
      //this.down('checkcolumn').on('checkchange', this.onCheckChange, this);
      this.store.on('update', this.onCheckChange, this);
      
    },
    
    onCheckChange: function(store, record, operation, modifiedFieldNames, eOpts ) {
      
      var wanted = record.get('wanted'),
          fileId = record.get('fileIndex'),
          torrentId = record.get('torrentId');
        
        if ( wanted === true){
            this.rpcService.setFilesToWanted(torrentId, [fileId]);
        }
        else {
            this.rpcService.setFilesToNotWanted(torrentId, [fileId]);
        }

    },
    
    setValue : function(files, oldVale) {
        this.value = files;
        this.store.loadRawData(files);
        
    }
});