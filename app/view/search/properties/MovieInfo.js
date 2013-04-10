Ext.define('Clutch.view.search.properties.MovieInfo', {

    extend : 'Ext.form.Panel',

    requires : ['Clutch.store.MovieInfoStore'],
    //requires : ['Clutch.view.field.TorrentStateField', 'Clutch.view.field.BytesField','Clutch.view.field.TextTimeField','Clutch.view.field.TimestampField'],

    alias : 'widget.movieinfo',

    config : {
        torrentSearchResult : null,

        matchedMovies : []
    },

    items : [{
        xtype : 'gridpanel',

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
        store : Ext.create('Clutch.store.MovieInfoStore')
    }, {
        fieldLabel : 'Title',
        name : 'title',
        xtype : 'textfield',
        readOnly : true,
        grow : true
    }, {
        fieldLabel : 'Year',
        name : 'year',
        xtype : 'numberfield',
        readOnly : true
    }, {
        fieldLabel : 'Rating',
        name : 'rating',
        xtype : 'numberfield',
        readOnly : true
    }, {
        fieldLabel : 'Synopsis',
        name : 'synopsis',
        xtype : 'textareafield',
        grow : true,
        width : 400,
        readOnly : true
    }],
    
    initComponent : function(cfg) {

        this.callParent(arguments);
    },

    applyTorrentSearchResult : function(searchResult, oldValue) {

        if (this.isVisible() === true) {
            this.searchForMoviesMatchingTorrentSearchResult(searchResult.get('name'));
        }
        return searchResult;
    },

    searchForMoviesMatchingTorrentSearchResult : function(uglyTitle) {
        var titleName = this.cleanupTitle(uglyTitle);

        console.log(uglyTitle + " becomes " + titleName);

        Clutch.util.RottenTomatoes.search(titleName, function(results, me) {
            var store = me.down('gridpanel').store;
            store.loadRawData(results);
            me.loadRecord(store.data.items[0]);
        }, this);
    },

    cleanupTitle : function(v) {
        //life.of.pi.(2012).blahhhhh
        var withoutDots = v.replace(new RegExp('\\.','g')," ");

        //life of pi (2012) blaahhhhhh
        var withoutParentheses = withoutDots.replace(new RegExp('\\(','g')," ");
        withoutParentheses = withoutParentheses.replace(new RegExp('\\)','g')," ");
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