/**
 * @class Clutch.model.SearchResult
 */
Ext.define('PirateBay.model.SearchResult', {

    extend : 'Ext.data.Model',

    idProperty : 'guid',

    fields : [{
        name : 'summaryLink',
        type : 'string'
    }, {
        name : 'commentsLink',
        type : 'string'
    }, {
        name : 'torrentLink',
        type : 'string'
    }, {
        name : 'name',
        type : 'string'
    }, {
        name : 'category',
        type : 'string'
    }, {
        name : 'seeds',
        type : 'number'
    }, {
        name : 'leechers',
        type : 'number'
    }, {
        name : 'provider',
        type : 'string'
    }, {
        name : 'pubDate',
        type : 'date'
    }, {
        name : 'id',
        type : 'string'
    }, {
        name : 'size',
        type : 'string'
    }, {
        name : 'comments',
        type : 'number'
    }, {
        name : 'downloads',
        type : 'number'
    }]
}); 