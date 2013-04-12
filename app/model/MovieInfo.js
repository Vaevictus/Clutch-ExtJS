
Ext.define('Clutch.model.MovieInfo', {
    extend : 'Ext.data.Model',
    fields : [{
        name: 'id',
        type : 'string'
    },{
        name : 'title',
        type : 'string'
    },{
        name : 'year',
        type : 'number'
    },{
        name : 'rating',
        type : 'number',
        mapping : 'ratings.critics_score'
    },{
        name : 'synopsis',
        type : 'string'
    },{
        name : 'alternate_ids'
    },{
        name : 'links'
    }]  
    
});
/*
 * {
04
    "id": "770672122",
05
    "title": "Toy Story 3",
06
    "year": 2010,
07
    "mpaa_rating": "G",
08
    "runtime": 103,
09
    "critics_consensus": "Deftly blending comedy, adventure, and honest emotion, Toy Story 3 is a rare second sequel that really works.",
10
    "release_dates": {
11
      "theater": "2010-06-18",
12
      "dvd": "2010-11-02"
13
    },
14
    "ratings": {
15
      "critics_rating": "Certified Fresh",
16
      "critics_score": 99,
17
      "audience_rating": "Upright",
18
      "audience_score": 91
19
    },
20
    "synopsis": "Pixar returns to their first success with Toy Story 3. The movie begins with Andy leaving for college and donating his beloved toys -- including Woody (Tom Hanks) and Buzz (Tim Allen) -- to a daycare. While the crew meets new friends, including Ken (Michael Keaton), they soon grow to hate their new surroundings and plan an escape. The film was directed by Lee Unkrich from a script co-authored by Little Miss Sunshine scribe Michael Arndt. ~ Perry Seibert, Rovi",
21
    "posters": {
22
      "thumbnail": "http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg",
23
      "profile": "http://content6.flixster.com/movie/11/13/43/11134356_pro.jpg",
24
      "detailed": "http://content6.flixster.com/movie/11/13/43/11134356_det.jpg",
25
      "original": "http://content6.flixster.com/movie/11/13/43/11134356_ori.jpg"
26
    },
27
    "abridged_cast": [
28
      {
29
        "name": "Tom Hanks",
30
        "characters": ["Woody"]
31
      },
32
      {
33
        "name": "Tim Allen",
34
        "characters": ["Buzz Lightyear"]
35
      },
36
      {
37
        "name": "Joan Cusack",
38
        "characters": ["Jessie the Cowgirl"]
39
      },
40
      {
41
        "name": "Don Rickles",
42
        "characters": ["Mr. Potato Head"]
43
      },
44
      {
45
        "name": "Wallace Shawn",
46
        "characters": ["Rex"]
47
      }
48
    ],
49
    "alternate_ids": {"imdb": "0435761"},
50
    "links": {
51
      "self": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json",
52
      "alternate": "http://www.rottentomatoes.com/m/toy_story_3/",
53
      "cast": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/cast.json",
54
      "clips": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/clips.json",
55
      "reviews": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/reviews.json",
56
      "similar": "http://api.rottentomatoes.com/api/public/v1.0/movies/770672122/similar.json"
57
    }
58
  }],
59
  "links": {
60
    "self": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Toy+Story+3&page_limit=1&page=1",
61
    "next": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Toy+Story+3&page_limit=1&page=2"
62
  },
63
  "link_template": "http://api.rottentomatoes.com/api/public/v1.0/movies.json?q={search-term}&page_limit={results-per-page}&page={page-number}"
64
}

 */