/**
 * @class Clutch.model.SearchResult
 */
Ext.define('Clutch.model.SearchResult', {
    extend : 'Ext.data.Model',

    idProperty : 'guid',

    fields : [{
        name : 'comment_link',
        convert : function(value, record) {

            var link = record.get('link') || "";

            return link.replace('tab=summary', 'tab=comments');
        }
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
        name : 'torrentLink',
        type : 'string'        
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
    },{
        name : 'comments',
        type : 'number'
    },
    {
        name : 'downloads',
        type : 'number'
    }]
});