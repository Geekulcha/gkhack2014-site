'use strict';

app.filter('reverse_return_first', function() {
    function toArray(list) {
        var k, out = [];
        if (list) {
            if (angular.isArray(list)) {
                out = list;
            } else if (typeof(list) === 'object') {
                for (k in list) {
                    if (list.hasOwnProperty(k)) {
                        out.push(list[k]);
                    }
                }
            }
        }
        return out;
    }
    return function(items) {
        var arr = toArray(items).slice().reverse();
        return arr[0];
    };
});

app.filter('tweet_text', function() {
    return function(item) {
        if (item != undefined)
            return item.text;
        else
            return "";
    }
});
