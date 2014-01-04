Ext.define('mobile.view.TorrentDetailsForm', {
    
   extend : 'Ext.form.Panel',
   
   alias : 'widget.torrentdetailsform',
   
   items :[
   {
       xtype : 'fieldset',
       
       title : 'TorrentDetails',
       
       defaults : {
       
           labelWidth : '35%'
       
       },
       
       items : [{

           xtype : 'textfield',
            
           label : 'Name',
                  
           readonly : true,
       
           name : 'name'
       },
       {
           xtype : 'textfield',
           
           label : 'Status',
           
           readonly : true,
           
           name : 'Status'
       },
       {
           xtype : 'textfield',
           
           label : 'Speed Down',
           
           readonly : true,
           
           name : 'SpeedDown'
       },
       {
           xtype : 'textfield',
           
           label : 'Speed Up',
           
           readonly : true,
           
           name : 'SpeedUp'
       }]
   }
   ]
   
    
});
