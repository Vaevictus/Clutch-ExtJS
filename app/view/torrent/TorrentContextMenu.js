Ext.define('Clutch.view.torrent.TorrentContextMenu', {
    extend : 'Ext.menu.Menu',

    alias : 'widget.torrentcontextmenu',

    items : [{
        text : 'Start',
        action : 'start',
        iconCls : 'tree-active'

    }, {
        text : 'Pause',
        action : 'pause',
        iconCls : 'tree-paused'
    }, {
        text : 'Remove',
        action : 'remove',
        iconCls : 'remove-small'
    }, {
        text : 'Set transfer limits',
        action : 'throttle',
        iconCls : 'tree-completed'
    }]
}); 