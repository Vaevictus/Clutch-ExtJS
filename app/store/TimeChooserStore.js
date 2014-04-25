Ext.define('Clutch.store.TimeChooserStore', {
    extend : 'Ext.data.Store',
    requires : ['Clutch.model.TimeChooser'],
    model : 'Clutch.model.TimeChooser',
    type : 'json',
	proxy : {
        type : 'memory'
    },
	config: {
		data: []
	},	
	printTime: function(t) {
		if (t < 10) return ('0' + t);
		return t;
	},	
	initData: function() {
		var minuteStep = 5;
		for (h = 0; h < 24; h++) {
			for (m = 0; m < (60/minuteStep); m++) {
				var entry = Ext.create('Clutch.model.TimeChooser', {
					label: String(this.printTime(h) + ':' + this.printTime(m*minuteStep)),
					value: (h*60 + m*minuteStep)
				});
				this.data.push(entry);
			}
		}
	},	
	constructor: function(config) {
		this.initData();		
		this.callParent(this.config || config);
    }
}); 