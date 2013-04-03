/**
 * @class NITB.model.MD_Notification
 * @extend Ext.data.Model
 * Data Model which contains all the informations related
 * to a single incoming Notification.
 */
Ext.define('Clutch.model.SearchResult', {
    extend : 'Ext.data.Model',
    fields : [{
        name : 'title',
        type : 'string'
    }, {
        name : 'link',
        type : 'string'
    }, {
        name : 'guid',
        type : 'string'
    }, {
        name : 'enclosure_url',
        type : 'string'
    }, {
        name : 'length',
        type : 'number'
    }, {
        name : 'tracker',
        type : 'string'
    }, {
        name : 'tracker_url',
        type : 'string'
    }, {
        name : 'kws',
        type : 'string'
    }, {
        name : 'exempts',
        type : 'string'
    }, {
        name : 'category',
        type : 'string'
    }, {
        name : 'original_site',
        type : 'string'
    }, {
        name : 'original_link',
        type : 'string'
    }, {
        name : 'size',
        type : 'string'
    }, {
        name : 'files',
        type : 'string'
    }, {
        name : 'Seeds',
        type : 'number'
    }, {
        name : 'leechers',
        type : 'string'
    }, {
        name : 'downloads',
        type : 'number'
    }, {
        name : 'votes',
        type : 'number'
    }, {
        name : 'comments',
        type : 'number'
    }, {
        name : 'hash',
        type : 'string'
    }, {
        name : 'pubDate',
        type : 'date'
    }]
});

// var x = {
    // "title" : "Jay-Z Ft <b>Rihanna</b> & Kanye West - Run This Town-MIXFIEND.mp3",
    // "link" : "http:\/\/isohunt.com\/torrent_details\/108828493\/rihanna?tab=summary",
    // "guid" : "108828493",
    // "enclosure_url" : "http://ca.isohunt.com/download/108828493/rihanna.torrent",
// 
    // "length" : 6606029,
    // "tracker" : "mixfiend.com",
    // "tracker_url" : "http:\/\/mixfiend.com:6969\/announce",
// 
    // "kws" : "Rap",
    // "exempts" : "",
    // "category" : "Audio",
    // "original_site" : "www.mininova.org",
    // "original_link" : "http:\/\/www.mininova.org\/get\/2791443",
// 
    // "size" : "6.3 MB",
    // "files" : 1,
    // "Seeds" : 38,
    // "leechers" : 1,
// 
    // "downloads" : 96892,
    // "votes" : 5,
    // "comments" : 1,
// 
    // "hash" : "57b53a233b3a72a5b5ed37d175d266f1e75abc03",
    // "pubDate" : "Fri, 24 Jul 2009 15:14:37 GMT"
// };
