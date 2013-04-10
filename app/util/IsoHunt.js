/**
 * @class Clutch.util.IsoHunt
 * The interface to the IsoHunt JSON Api
 * The spec can be found here: http://isohunt.com/forum/viewtopic.php?t=150656&postdays=0&postorder=asc&start=15
 */
Ext.define('Clutch.util.IsoHunt', {

    mixins : {
        observable : 'Ext.util.Observable'
    },
    singleton : true,

    config : {

        jsonpProxy : 'http://query.yahooapis.com/v1/public/yql?&q={0}&format=json',

        apiUrl : 'http://ca.isohunt.com/js/json.php?ihq={0}',

        searchTerm : '',

        searchCat : '',
        
        resultHandlerXtype : '',

        //commentsQuery : 'select * from html where url="{0}" and xpath=\'//div[@class="commentBody1"]\''
        //commentsQuery : "select * from html where url='{0}' and xpath='//div[@class=\"commentBody1\"]'"
        commentsQuery : 'select p from html where url="{0}" and xpath="//div[@class=\'commentBody1\']"'
    },

    constructor : function(config) {

        var me = this;

        me.initConfig(config);

        me.mixins.observable.constructor.call(me, config);

        me.addEvents(

        /**
         * @event torrentdetailsreceived
         * Fires when the client has received a list of torrents and their associated properties (speed, progress etc.)
         * @param {Object} responseArgs The response arguments
         */'searchfail',

        /**
         * @event settingsreceived
         * Fires when the client has received a list of config arguments eg download directory, limits etc.
         * @param {Object} searchresults The search results
         */
        'aftersearch',

        /**
         * @event statsreceived
         * Fires when the client has received a list of session and historic stats
         * @param {Object} responseArgs The Response arguments
         */
        'beforesearch');
    },
    getComments : function(commentUrl, callback, scope) { 
               
        var proxy = this.getJsonpProxy(), query = this.getCommentsQuery();

        //format the commentsquery with the url to the torrentpage
        var formattedQuery = encodeURIComponent(Ext.String.format(query, commentUrl));

        //format the proxy url with the formatted query

        var url = Ext.String.format(proxy, formattedQuery);

        Ext.data.JsonP.request({
            url : url,

            success : callback,

            scope : scope,

            failure : callback
        });
    },

    search : function(searchTerm, callingGrid) {
        searchTerm = encodeURIComponent(searchTerm);
        //replaces characters such as ' ' with url friendly version
        var proxy = this.getJsonpProxy(), apiUrl = this.getApiUrl(), fullIsoHuntRestfulQuery = Ext.String.format(apiUrl, searchTerm);

        var q = encodeURIComponent(Ext.String.format('select * from json where url="{0}"', fullIsoHuntRestfulQuery));

        var url = Ext.String.format(proxy, q);
        
        Clutch.app.fireEvent('beforesearch', searchTerm, callingGrid);
        
        Ext.data.JsonP.request({
            url : url,

            success : function(response) {
                
                if (!response.query || !response.query.results || !response.query.results.json) {
                    Clutch.app.fireEvent('searchfail', response, callingGrid);
                    return;
                }

                var YQLResultObject = response.query.results.json.items.list, HarmonisedResults = [];
                Ext.each(YQLResultObject, function(r) {
                    HarmonisedResults.push(Clutch.util.Harmoniser.harmoniseIsoHunt(r));
                }, this);
                
                Clutch.app.fireEvent('aftersearch', HarmonisedResults, callingGrid);
            },
            scope : this,

            failure : function(response) {

                Clutch.app.fireEvent('searchfail', response, callingGrid);
            }
        });

    }
});

