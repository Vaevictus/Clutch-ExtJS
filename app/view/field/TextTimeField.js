Ext.define('Clutch.view.field.TextTimeField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.secondsfield',

    setValue : function(v) {

        if (!v) {
            return Ext.form.field.Text.superclass.setRawValue.call(this, this.emptyText);
        }
        if (v < 0){
           return Ext.form.field.Text.superclass.setRawValue.call(this, 'Unknown');
        }

        var changed = Ext.util.Format.secondsToWords(v);

        return Ext.form.field.Text.superclass.setRawValue.call(this, changed);

    }
});
