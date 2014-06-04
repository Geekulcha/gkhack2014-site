'use strict';

app.factory('Subscriber',
    function($firebase, FIREBASE_URL) {
        var ref = new Firebase(FIREBASE_URL + 'gkhack2014/subscribers');
        var subscribers = $firebase(ref);

        var Subscriber = {
            all: subscribers,
            create: function (subscriber) {
              return subscribers.$add(subscriber);
            },
            find: function (subscriber) {
                return subscribers.$child(subscriberId);
            }
        };

        return Subscriber;
    });
