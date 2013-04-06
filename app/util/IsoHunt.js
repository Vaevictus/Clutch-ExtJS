/**
 * @class Clutch.util.IsoHunt
 * The interface to the IsoHunt JSON Api
 * The spec can be found here: http://isohunt.com/forum/viewtopic.php?t=150656&postdays=0&postorder=asc&start=15
 */
Ext.define('Clutch.util.IsoHunt', {
    requires : ['Ext.TaskManager'],
    mixins : {
        observable : 'Ext.util.Observable'
    },
    singleton : true,

    config : {

        jsonpProxy : 'http://query.yahooapis.com/v1/public/yql?&q={0}&format=json',

        apiUrl : 'http://isohunt.com/js/json.php?ihq={0}&iht={1}',

        searchTerm : '',

        searchCat : '',
        
        commentsQuery : 'select * from html where url="http://isohunt.com/torrent_details/97421809/fuck?tab=comments" and xpath=\'//div[@class="commentBody1"]'

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

    search : function(searchTerm, categoryName) {
        searchTerm = encodeURIComponent(searchTerm);
        categoryName = encodeURIComponent(categoryName);
        //replaces characters such as ' ' with url friendly version
        var proxy = this.getJsonpProxy();
        var apiUrl = this.getApiUrl();
        var fullIsoHuntRestfulQuery = Ext.String.format(apiUrl, searchTerm, categoryName);

        var q = encodeURIComponent(Ext.String.format('select * from json where url="{0}"', fullIsoHuntRestfulQuery));

        var url = Ext.String.format(proxy, q);
        Clutch.app.fireEvent('beforesearch', searchTerm, categoryName);
        Ext.data.JsonP.request({
            url : url,

            success : function(response) {

                if (!response.query || !response.query.results || !response.query.results.json) {
                    Clutch.app.fireEvent('searchfail', response);
                    return;
                }

                var YQLResultObject = response.query.results.json;

                if (YQLResultObject.total_results > 0) {
                    var searchResults = response.query.results.json.items.list;
                    Clutch.app.fireEvent('aftersearch', searchResults);

                } else {
                    Clutch.app.fireEvent('aftersearch', []);
                }

            },
            scope : this,

            failure : function(response) {

                Clutch.app.fireEvent('searchfail', response);
            }
        });

    }
});

