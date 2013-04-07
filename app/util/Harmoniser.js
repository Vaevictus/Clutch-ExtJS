/*
 * This class will ultimately be 'registered' with by all possible search providers.
 * During registration, the provider will provide a  mapping of how its search results properties will map to the commonly described format in this class
 * for now i am doing it quick and dirty
 */
Ext.define('Clutch.util.Harmoniser', {

    singleton : true,

    harmonisePirateBay : function(r) {

        var SearchResult = {
            name : r.name,

            category : r.category,

            seeds : r.seeders,

            leechers : r.leechers,

            torrentLink : r.magnet,

            provider : 'The Pirate Bay',

            pubDate : r.uploaded, //todo convert this crap

            id : r.id,
            
            size : r.size, //also needs converting,
            
            downloads : 0,
            
            comments : 0,
            
            commentsUrl : "n/a"

        }
        return SearchResult;
    },
    
    harmoniseIsoHunt : function(r) {
        
        var SearchResult = {
            
            name : r.title,
            
            category : r.category,
            
            seeds : r.Seeds,
            
            leechers : r.leechers,
            
            torrentLink : r.enclosure_url,
            
            provider : 'ISO Hunt',
            
            pubDate : r.pubDate,
            
            id : r.guid,
            
            size : r['length'], //because of terrible choice of property name
            
            comments : r.comments,
            
            commentsUrl : "TODO",
            
            downloads : r.downloads
        }
        
        return SearchResult;
    }
});
//TPB result from http://apify.ifc0nfig.com/tpb/search?id=walking%20dead
// category: "TV shows"
// id: 8325656
// leechers: 1600
// magnet: "magnet:?xt=urn:btih:2055cff1121cb13780e899bc8873196dc0be8bed&dn=The+Walking+Dead+S03E16+REPACK+HDTV+x264-EVOLVE+%5Beztv%5D&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A6969&tr=udp%3A%2F%2Ftracker.ccc.de%3A80"
// name: "The Walking Dead S03E16 REPACK HDTV x264-EVOLVE [eztv]"
// seeders: 26371
// size: "364.12 MiB"
// uploaded: "04-01 04:59"


/* 
 * Seeds: "3310"
category: "TV"
comments: "30"
downloads: "10"
enclosure_url: "http://ca.isohunt.com/download/454568651/walking+dead.torrent"
exempts: " ... the.<b>walking.dead</b>.s03e10.hdtv.x264-2hd.mp4"
files: "2"
guid: "454568651"
hash: "63db3c2bedc40505d1f548c3a8b3b05597420190"
kws: "Xvid"
leechers: "155"
length: "497690870"
link: "http://isohunt.com/torrent_details/454568651/walking+dead?tab=summary"
original_link: "http://1337x.org/torrent/479633/The-Walking-Dead-S03E10-HDTV-x264-2HD-ettv/"
original_site: "1337x.org"
pubDate: "Mon, 18 Feb 2013 03:09:51 GMT"
size: "474.64 MB"
title: "The <b>Walking Dead</b> S03E10 HDTV x264-2HD[ettv]"
tracker: "tracker.publicbt.com"
tracker_url: "http://tracker.publicbt.com:80/announce"
votes: "31"
 * 
 * 
 * 
 */