Ext.define('Clutch.view.field.TorrentStateField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.torrentstatefield',
    
    inject : 'rpcService',
    
    config : {
      rpcService : null  
    },

    setValue : function(v) {
        
        var rpcService = this.getRpcService();
        
        if (v === undefined || v === null) {
            return Ext.form.field.Text.superclass.setRawValue.call(this, this.emptyText);
        }
        var changed = rpcService.parseTorrentState(v);

        return Ext.form.field.Text.superclass.setRawValue.call(this, changed);

    }
});
