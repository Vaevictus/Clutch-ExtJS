Ext.define('Clutch.view.settings.SettingsCardBase', {

    extend : 'Ext.form.FormPanel',

    alias : 'widget.settingscardbase',
    
    inject : ['rpcService'],
    
    config : {
        
      rpcService : null  
 
    },

    getValuesFromServer : function() {

        var myFields = this.getFields();

        this.getRpcService().sessionGet(myFields).then(
            function(obj){
                this.setValue(obj['arguments']);     
            }
        );

    },

    setValue : function(values) {
        for (var v in values) {

            var fieldname = v;
            var value = values[fieldname];
            var query = Ext.String.format('field[name={0}]', fieldname);
            var component = this.down(query);
            if (component) {
                component.setValue(value);
            }
        }
    },

    getValues : function() {

        var fieldsToLookFor = this.getFields(), values = {};

        Ext.each(fieldsToLookFor, function(f) {
            var component = this.down(Ext.String.format('field[name={0}]', f));
            if (component) {
                values[f] = component.getValue();
            }

        }, this);

        return values;
    }
});
