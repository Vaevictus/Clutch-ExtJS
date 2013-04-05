Ext.define('Clutch.view.field.BytesField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.bytesfield',

    config : {
        prefix : '',

        suffix : ''
    },
    setValue : function(v) {
        if (!v) {
            return Ext.form.field.Text.superclass.setRawValue.call(this, this.emptyText);
        }

        var changed = Ext.util.Format.fileSize(v);

        return Ext.form.field.Text.superclass.setRawValue.call(this, this.prefix + changed + this.suffix);

    }
});
