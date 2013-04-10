/**
 * @class Clutch.util.RottenTomatoes
 * The interface to the 3rd party RottenTomatoes JSON Api
 */
Ext.define('Clutch.util.RottenTomatoes', {

    mixins : {
        observable : 'Ext.util.Observable'
    },
    singleton : true,

    config : {

        apiKey : 'fnkc58sjushv3xqrk3dcpr44',

        apiUrl : 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey={0}&q={1}&page_limit={2}&page={3}'

    },

    constructor : function(config) {

        var me = this;

        me.initConfig(config);

        me.mixins.observable.constructor.call(me, config);

        me.addEvents(

        /* @event statsreceived
         * Fires when the client has received a list of session and historic stats
         * @param {Object} responseArgs The Response arguments
         */'moviedetailsreceived');
    },

    search : function(searchTerm, callbackFn, scope) {
        searchTerm = encodeURIComponent(searchTerm);
        var apiKey = this.getApiKey(), apiUrl = this.getApiUrl(), url = Ext.String.format(apiUrl, apiKey, searchTerm, 50, 1);

        Ext.data.JsonP.request({
            url : url,

            success : function(results) {
                callbackFn(results.movies, scope);

            },
            scope : this,

            failure : function(response) { debugger;
            }
        });

    }
});

