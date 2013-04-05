/**
 * @class NITB.model.MD_Notification
 * @extend Ext.data.Model
 * Data Model which contains all the informations related
 * to a single incoming Notification.
 */
Ext.define('Clutch.model.Tracker', {
    extend : 'Ext.data.Model',
    fields : [{
        name : 'announce',
        type : 'string'
    },{
        name : 'announceState',
        type : 'number'
    }, {
        name : 'downloadCount',
        type : 'number'
    }, {
        name : 'downloadCount',
        type : 'number'
    }, {
        name : 'hasAnnounced',
        type : 'bool'
    }, {
        name : 'hasScraped',
        type : 'bool'
    }, {
        name : 'host',
        type : 'string'
    }, {
        name : 'id',
        mapping : 'announce',
        type : 'string'
    }, {
        name : 'rpcId',
        mapping : 'id',
        type : 'number'  
    },{
        name : 'isBackup',
        type : 'bool'
    }, {
        name : 'lastAnnouncePeerCount',
        type : 'number'
    }, {
        name : 'lastAnnounceResult',
        type : 'string'
    }, {
        name : 'lastAnnounceStartTime',
        type : 'number'
    }, {
        name : 'lastAnnounceSucceeded',
        type : 'bool'
    }, {
        name : 'lastAnnounceTime',
        type : 'number'
    }, {
        name : 'lastAnnounceTimedOut',
        type : 'bool'
    }, {
        name : 'leecherCount',
        type : 'number'
    }, {
        name : 'nextAnnounceTime',
        type : 'number'
    }, {
        name : 'nextScrapeTime',
        type : 'number'
    }, {
        name : 'scrape',
        type : 'string'
    }, {
        name : 'scrapeState',
        type : 'number'
    }, {
        name : 'seederCount',
        type : 'number'
    }, {
        name : 'tier',
        type : 'number'
    }]
});

/*
 announce                | string     | tr_tracker_stat
 284                       | announceState           | number     | tr_tracker_stat
 285                       | downloadCount           | number     | tr_tracker_stat
 286                       | hasAnnounced            | boolean    | tr_tracker_stat
 287                       | hasScraped              | boolean    | tr_tracker_stat
 288                       | host                    | string     | tr_tracker_stat
 289                       | id                      | number     | tr_tracker_stat
 290                       | isBackup                | boolean    | tr_tracker_stat
 291                       | lastAnnouncePeerCount   | number     | tr_tracker_stat
 292                       | lastAnnounceResult      | string     | tr_tracker_stat
 293                       | lastAnnounceStartTime   | number     | tr_tracker_stat
 294                       | lastAnnounceSucceeded   | boolean    | tr_tracker_stat
 295                       | lastAnnounceTime        | number     | tr_tracker_stat
 296                       | lastAnnounceTimedOut    | boolean    | tr_tracker_stat
 297                       | lastScrapeResult        | string     | tr_tracker_stat
 298                       | lastScrapeStartTime     | number     | tr_tracker_stat
 299                       | lastScrapeSucceeded     | boolean    | tr_tracker_stat
 300                       | lastScrapeTime          | number     | tr_tracker_stat
 301                       | lastScrapeTimedOut      | boolean    | tr_tracker_stat
 302                       | leecherCount            | number     | tr_tracker_stat
 303                       | nextAnnounceTime        | number     | tr_tracker_stat
 304                       | nextScrapeTime          | number     | tr_tracker_stat
 305                       | scrape                  | string     | tr_tracker_stat
 306                       | scrapeState             | number     | tr_tracker_stat
 307                       | seederCount             | number     | tr_tracker_stat
 308                       | tier      */