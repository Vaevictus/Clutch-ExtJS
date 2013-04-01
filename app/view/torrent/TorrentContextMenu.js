Ext.define('Clutch.view.torrent.TorrentContextMenu', {
    extend : 'Ext.menu.Menu',
    
    alias: 'widget.torrentcontextmenu',
    
    items: [
    {
        text: 'Start',
        action: 'start'
            
    },{
        text: 'Pause',
        action: 'pause'
    },
    {
        text: 'Remove',
        action: 'remove'
    },{
        text: 'Set transfer limits',
        action: 'throttle'
    }
    
    
    ]
});