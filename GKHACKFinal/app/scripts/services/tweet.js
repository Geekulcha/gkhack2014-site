'use strict';

app.factory('Tweet',
    function($firebase, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL + 'gkhack2014/tweets');
        var tweets = $firebase(ref);

        var Tweet = {
            all: tweets,
            create: function (tweet) {
              return tweets.$add(tweet);
            },
            find: function (tweet) {
                return tweets.$child(tweetId);
            }
        };

        return Tweet;
    });
