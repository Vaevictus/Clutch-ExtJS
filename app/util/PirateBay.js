/**
 * @class Clutch.util.IsoHunt
 * The interface to the 3rd party piratebay JSON Api
 * The spec can be found here: http://apify.ifc0nfig.com/docs
 */
Ext.define('Clutch.util.PirateBay', {

    mixins : {
        observable : 'Ext.util.Observable'
    },
    singleton : true,

    config : {

        apiUrl : 'http://apify.ifc0nfig.com/tpb/search?id={0}&key=121a959a04d443c8a163f7603c043040',

        topUrl : 'http://apify.ifc0nfig.com/tpb/top?id=all&key=121a959a04d443c8a163f7603c043040'

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

    search : function(searchTerm, callingGrid) {
        searchTerm = encodeURIComponent(searchTerm);
        var apiUrl = this.getApiUrl(), url = Ext.String.format(apiUrl, searchTerm);

        Clutch.app.fireEvent('beforesearch', searchTerm, callingGrid);
        Ext.data.JsonP.request({
            url : url,

            success : function(results) {
                var clutchResults = [];
                Ext.each(results, function(r) {
                    clutchResults.push(Clutch.util.Harmoniser.harmonisePirateBay(r));
                }, this);
                Clutch.app.fireEvent('aftersearch', clutchResults, callingGrid);

            },
            scope : this,

            failure : function(response) {

                Clutch.app.fireEvent('searchfail', response, callingGrid);
            }
        });

    },
    getTopResults : function(callingGrid) {
        var url = this.getTopUrl();
        Clutch.app.fireEvent('beforesearch', 'Top in "All"', callingGrid);
        Ext.data.JsonP.request({
            url : url,

            success : function(results) {
                var clutchResults = [];
                Ext.each(results, function(r) {
                    clutchResults.push(Clutch.util.Harmoniser.harmonisePirateBay(r));
                }, this);
                Clutch.app.fireEvent('aftersearch', clutchResults, callingGrid);

            },
            scope : this,

            failure : function(response) {

                Clutch.app.fireEvent('searchfail', response, callingGrid);
            }
        });
    }
});

