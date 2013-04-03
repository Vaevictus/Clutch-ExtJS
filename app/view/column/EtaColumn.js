Ext.define('Clutch.view.column.EtaColumn', {
    extend : 'Ext.grid.column.Column',

    alias : 'widget.etacolumn',

 //taken from http://stackoverflow.com/questions/8211744/convert-milliseconds-or-seconds-into-human-readable-form
    renderer : function(seconds, m, r) {
        if (seconds < 1) return '-';
        
        var numyears = Math.floor(seconds / 31536000);
        if (numyears) {
            return numyears + ' year' + ((numyears > 1) ? 's' : '');
        }
        var numdays = Math.floor((seconds % 31536000) / 86400);
        if (numdays) {
            return numdays + ' day' + ((numdays > 1) ? 's' : '');
        }
        var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
        if (numhours) {
            return numhours + ' hour' + ((numhours > 1) ? 's' : '');
        }
        var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
        if (numminutes) {
            return numminutes + ' minute' + ((numminutes > 1) ? 's' : '');
        }
        var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
        if (numseconds) {
            return numseconds + ' second' + ((numseconds > 1) ? 's' : '');
        }
        return 'less then a second';
    }   
    
});



