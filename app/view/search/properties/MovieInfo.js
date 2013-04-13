Ext.define('Clutch.view.search.properties.MovieInfo', {

    extend : 'Ext.form.Panel',

    requires : ['Clutch.store.MovieInfoStore'],

    autoScroll : true,

    alias : 'widget.movieinfo',

    config : {

        torrentSearchResult : null,

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

        Clutch.util.RottenTomatoes.search(searchTerm, function(results, me) {

            var grid = me.down('#grid'),
                store = grid.store;
            
            store.loadRawData(results);
            
            grid.getView().getSelectionModel().select(0); 
            

        }, this);
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

    openIMDB : function() { debugger;
       
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

/*1.18 MB of 497.6 MB (0.35%), 589.8 kB Unverified
 Activity

 Availability: 100%
 Downloaded:  815.1 kB
 Uploaded: 3.11 MB (Ratio: 3.81)
 State: Downloading
 Running Time: 4 minutes
 Remaining Time:  17 hours
 Last Activity: Active now
 Error: None

 Details

 Size: 497.6 MB (1,899 pieces @ 256.0 KiB)
 Location: /home/whitcombecr/Downloads
 Hash: 63db3c2bedc40505d1f548c3a8b3b05597420190
 Privacy: Public torrent
 Origin: Created by ruTorrent (PHP Class - Adrien Gibrat) on Mon Feb 18 2013
 Comment: Torrent downloaded from <a target="_blank" href="http://www.btscene.eu">http://www.btscene.eu</a>
 */