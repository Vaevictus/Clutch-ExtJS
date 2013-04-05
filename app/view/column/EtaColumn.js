Ext.define('Clutch.view.column.EtaColumn', {
    extend : 'Ext.grid.column.Column',

    alias : 'widget.etacolumn',
    
    emptyText : '',
    
 //taken from http://stackoverflow.com/questions/8211744/convert-milliseconds-or-seconds-into-human-readable-form
    renderer : function(seconds, m, r) {
          
        if (seconds < 1) return  this.emptyText;
        
        return Ext.util.Format.secondsToWords(seconds);
    }   
    
});

