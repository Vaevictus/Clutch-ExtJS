Ext.define('Clutch.view.field.TorrentStateField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.torrentstatefield',

    setValue : function(v) {
        if (!v) {
            return Ext.form.field.Text.superclass.setRawValue.call(this, this.emptyText);
        }
        var changed = Clutch.util.RPC.parseTorrentState(v);

        return Ext.form.field.Text.superclass.setRawValue.call(this, changed);

    }
});
