Ext.define('Clutch.view.field.TorrentStateField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.torrentstatefield',
    
    setValue : function(v) {

        var changed = Clutch.util.RPC.parseTorrentState(v);
        
        return Ext.form.field.Text.superclass.setRawValue.call(this, changed);
               
        
    }
}); 