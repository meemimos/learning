// Callback Functions

window.onload = function(){

// sync
/*    function callback(val){
        console.log(val);
    }

    var cryptos = ["BTC", "LTC", "NMP", "PPC", "DSH"];
    cryptos.forEach(callback);
*/

// async
/*
    function cb(data){
        console.log(data);
    }

    $.get("data/tweets.json", cb);
    console.log("test");
*/


    function handleError(jqXHR, textStatus, error){
        console.log(error);
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: cbTweets,
        error: handleError
    });

    function cbTweets(data){
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: cbFriends,
            error: handleError
        });
    }

    function cbFriends(data){
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function(data){
                console.log(data);

            },
            error: handleError
        });
    }

};
