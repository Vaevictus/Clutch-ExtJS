Ext.define('Clutch.view.search.SearchContextMenu', {
    extend : 'Ext.menu.Menu',

    alias : 'widget.searchcontextmenu',

    items : [{
        text : 'Download',
        action : 'download',
        itemId : 'btnDownload',
        iconCls : 'tree-downloading'
    }, {
        text : 'View source page',
        action : 'view',
        itemId : 'btnViewSourcePage'
    }, {
        text : 'View movie information',
        action : 'showmovieinfo',
        itemId : 'btnShowMovieInfo'
    }],

    initComponent : function() {
        this.callParent(arguments);
        this.down('#btnDownload').on('click', this.onBtnDownloadClick, this);

    },

    onBtnDownloadClick : function(btn) {
        
        var selected = this.record;
        
        if (selected) {
            Ext.create("Clutch.view.torrent.AddTorrentDialog", {
                url : selected.get('torrentLink')
            }).show();
        }
    }
});
