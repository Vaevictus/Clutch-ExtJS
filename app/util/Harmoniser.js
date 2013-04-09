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

            commentsLink : '',

            summaryLink : '',

            provider : 'The Pirate Bay',

            pubDate : this.tryParsePirateBayDate(r.uploaded), //todo convert this crap

            id : r.id,

            size : this.tryParsePirateBaySize(r.size), //also needs converting,

            downloads : 0,

            comments : 0

        }
        return SearchResult;
    },

    tryParsePirateBayDate : function(badDate) {
        var prefixYear = (new Date().getYear() + 1900) + " ";
        // Date.getYear() gives the current year - 1900
        var dateFormat1 = "yyyy MM-dd HH:mm";
        var dateFormat2 = "MM-dd yyyy";

        var possGoodDate = new Date(Date.parse(prefixYear + badDate, dateFormat1));
        if (possGoodDate != 'Invalid Date') {//MAKE SURE TO KEEP !=, using !== always returns true
            return possGoodDate;
        }

        possGoodDate = new Date(Date.parse(badDate, dateFormat2));
        if (possGoodDate != 'Invalid Date') {
            return possGoodDate;
        }
        //must be in "Today/Y-Day" format, just return todays date
        return new Date();
    },

    tryParsePirateBaySize : function(badSize) {
        var split = badSize.split(" "), units = split[1], badValue = split[0], goodValue = 0;
        switch(units) {
            case 'MiB':
                goodValue = badValue * 1024 * 1024;
                break
            case 'GiB':
                goodValue = badValue * 1024 * 1024 * 1024;
                break;
            case 'KiB':
                goodValue = badValue * 1024;
                break;
            case 'B':
                goodValue = badValue * 1;
                break;
            default:
                console.log('Unknown unit: ' + units);
                break;
        }
        return goodValue;

    },
    harmoniseIsoHunt : function(r) {
        
        var SearchResult = {

            name : r.title,

            category : r.category,

            seeds : r.Seeds,

            leechers : r.leechers,

            torrentLink : r.enclosure_url,

            commentsLink : r.link.replace('tab=summary', 'tab=comments'),

            summaryLink : r.link,

            provider : 'ISO Hunt',

            pubDate : r.pubDate,

            id : r.guid,

            size : r['length'], //because of terrible choice of property name

            comments : r.comments,

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