Ext.define("Clutch.view.peer.PeersGrid", {
    extend : 'Ext.grid.Panel',

    alias : 'widget.peersgrid',

    requires : ['Clutch.store.PeersStore'],
    
    store : 'PeersStore',

    config : {
        value : null

    },

    viewConfig : {
        preserveScrollOnRefresh : true, //TODO - doesn't quite work how desired when there are many torrents in the grid
        stripeRows : true,
        emptyText : 'No Peers to show',
        deferEmptyText : false
        
    },

    columns : [{
        header : 'Up',
        flex : 1,
        dataIndex : 'rateToPeer',
        xtype : 'speedcolumn'
    }, {
        header : 'Down',
        xtype : 'torrentstatuscolumn',
        dataIndex : 'rateToClient',
        xtype : 'speedcolumn'
    }, {
        header : 'Progress',
        dataIndex : 'progress',
        xtype : 'torrentprogresscolumn'
    }, {
        header : 'Status',
        hidden: true
        //TODO
    }, {
        header : 'Address',
        dataIndex : 'address'
    }, {
        header : 'Client',
        dataIndex : 'clientName'
    }],
    selModel : new Ext.selection.RowModel({
        mode : 'SINGLE'
    }),

    
    applyValue : function(newValue, oldValue) {
        
        this.store.loadData(newValue);
        return newValue;
    }
    
});
