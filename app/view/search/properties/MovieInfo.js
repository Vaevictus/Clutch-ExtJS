Ext.define('Clutch.view.search.properties.MovieInfo', {

    extend : 'Ext.form.Panel',

    requires : ['Clutch.store.MovieInfoStore'],

    inject : ['movieService'],

    autoScroll : true,

    alias : 'widget.movieinfo',

    config : {

        torrentSearchResult : null,

        movieService : null,

        matchedMovies : [],

        imdbTemplate : 'http://www.imdb.com/title/tt{0}/'
    },

    items : [{
        xtype : 'gridpanel',

        itemId : 'grid',

        height : 200,

        columns : [{
            header : 'Title',
            dataIndex : 'title',
            flex : 1
        }, {
            header : 'Year',
            dataIndex : 'year'
        }, {
            header : 'Rating',
            dataIndex : 'rating'
        }],

        viewConfig : {
            emptyText : 'No results',
            deferEmptyText : false
        },
        store : Ext.create('Clutch.store.MovieInfoStore')
    }, {
        //  fieldLabel : 'Synopsis',
        name : 'synopsis',
        xtype : 'textareafield',
        grow : true,
        width : 350,
        readOnly : true
    }],

    tbar : [{
        xtype : 'textfield',
        emptyText : 'Enter search term',
        itemId : 'moviesearchtext',
        width : 300
    }, {
        xtype : 'button',
        text : 'Go',
        action : 'go'

    }],

    bbar : [{
        xtype : 'button',
        action : 'viewimdblink',
        text : 'View on IMDB'
    }, '->', {
        xtype : 'button',
        action : 'viewrtlink',
        text : 'View on Rotten Tomatoes'
    }],

    constructor : function(cfg) {

        this.callParent(arguments);

        this.initConfig(cfg);

    },

    applyTorrentSearchResult : function(searchResult, oldValue) {

        var dirty = searchResult.get('name');
        var withoutTags = Ext.util.Format.stripTags(dirty);
        var title = this.cleanupTitle(withoutTags);

        this.down('#moviesearchtext').setValue(title);

        if (this.isVisible() === true) {

            this.search(title);

        }

        return searchResult;
    },
    doManualSearch : function() { 
        var searchTerm = this.down('#moviesearchtext').getValue();

        this.search(searchTerm);

    },

    search : function(searchTerm) {

        this.getMovieService().search(searchTerm).then({

            success : function(movies) {
                
                var grid = this.down('#grid'), store = grid.store;
                store.loadRawData(movies);

                grid.getView().getSelectionModel().select(0);
            },

            failure : function(response) { 
               
            },

            scope : this

        });

    },

    cleanupTitle : function(v) {
        //life.of.pi.(2012).blahhhhh
        var withoutDots = v.replace(new RegExp('\\.', 'g'), " ");

        //life of pi (2012) blaahhhhhh
        var withoutParentheses = withoutDots.replace(new RegExp('\\(', 'g'), " ");
        withoutParentheses = withoutParentheses.replace(new RegExp('\\)', 'g'), " ");
        //life of pi 2012 blahhhhhh

        //split on spaces
        var arrWords = withoutParentheses.split(' '), newTitle = '';

        for (var i = 0; i < arrWords.length; i++) {
            var word = arrWords[i];

            newTitle += word + " ";
            if (isNaN(parseInt(word)) === false && parseInt(word) > 1900 && parseInt(word) < 2015)
                break;
        }
        return newTitle.trim();

    },

    openIMDB : function() {

        var grid = this.down('gridpanel'), selected = grid.getView().getSelectionModel().getSelection()[0];

        if (selected) {

            var url = Ext.String.format(this.getImdbTemplate(), selected.get('alternate_ids').imdb);

            window.open(url);
        }

    },

    openRottenTomatoes : function() {

        var grid = this.down('gridpanel'), selected = grid.getView().getSelectionModel().getSelection()[0];

        if (selected) {

            var url = selected.get('links').alternate;

            window.open(url);
        }
    }
});
