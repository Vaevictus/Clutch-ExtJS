Ext.define('Clutch.view.field.TextTimeField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.secondsfield',

    setValue : function(v) {

        var changed = Ext.util.Format.secondsToWords(v);
        
        return Ext.form.field.Text.superclass.setRawValue.call(this, changed);
               
        
    }
}); 