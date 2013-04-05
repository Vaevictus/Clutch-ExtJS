Ext.define('Clutch.view.field.TimestampField', {
    extend : 'Ext.form.field.Text',

    alias : 'widget.timestampfield',

    setValue : function(v) {
        var dt = new Date(v);
      
        var changed = Ext.Date.format(dt, 'F j, Y, g:i a');
        
        return Ext.form.field.Text.superclass.setRawValue.call(this, changed);
               
        
    }
}); 