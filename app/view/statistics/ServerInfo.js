Ext.define('Clutch.view.statistics.ServerInfo', {

    extend : 'Ext.container.Container',

    alias : 'widget.serverinfo',
    
    layout : 'hbox',

    config : {

        serverVersion : '',

        rpcVersion : '',
        
        portStatus : 'Checking...'

    },

    items : [{
        xtype : 'tbtext',
        itemId : 'serverversion'
    }, { xtype: 'tbseparator' }, {
        xtype : 'tbtext',
        itemId : 'rpcversion'
    },
    {
        
        xtype : 'tbtext',
        text : 'Port Status: Checking...',
        itemId : 'txtPortStatus'
        
    }],
    
    initComponent: function() {
      
      this.callParent();
    
      var tbitem = this.down('#txtPortStatus');
      
      tbitem.on('afterrender', this.onAfterRender,this);
       
      
    },
    onAfterRender: function(tbitem) {
        
        var el = tbitem.getEl();
       
        el.on('click', function() {
          
           this.down('#txtPortStatus').setText('Re-checking....');
             this.fireEvent('recheckport');
        },this);
      
    },
    applyServerVersion : function(v, oldValue){
        
        this.down('#serverversion').setText('Transmission Version: ' + v);
        
        return v;
    },
    
    applyRpcVersion : function(v, oldValue){
        
        this.down('#rpcversion').setText('RPC : ' + v)
        
        return v;
    },
    
    applyPortStatus : function(v, oldValue){
        
        var text = v ? "Port Status: Open" : "Port Status: Closed"
        this.down('#txtPortStatus').setText(text);
        return v;
    }
});

