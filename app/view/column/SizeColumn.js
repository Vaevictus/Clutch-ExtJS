Ext.define('Clutch.view.column.SizeColumn', {
    extend : 'Ext.grid.column.Column',

    alias : 'widget.sizecolumn',

    renderer : function(v, m, r) {
            var value = Ext.util.Format.fileSize(v);
            return value;
        }
});
