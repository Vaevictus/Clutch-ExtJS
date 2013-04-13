Ext.define('Clutch.view.statistics.ServerInfo', {

    extend : 'Ext.container.Container',

    alias : 'widget.serverinfo',

    config : {

        serverVersion : '',

        rpcVersion : ''

    },

    items : [{
        xtype : 'tbtext',
        itemId : 'serverversion'
    }, { xtype: 'tbseparator' }, {
        xtype : 'tbtext',
        itemId : 'rpcversion'
    }],
    
    applyServerVersion : function(v, oldValue){
        
        this.down('#serverversion').setText('Transmission Version: ' + v);
        
        return v;
    },
    
    applyRpcVersion : function(v, oldValue){
        
        this.down('#rpcversion').setText('RPC : ' + v)
        
        return v;
    }
});

