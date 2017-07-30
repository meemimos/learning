window.onload = function(){

    genWrapper(function* generator(){

        var tweets = yield $.getJSON("data/tweets.json");
        console.log(tweets);

        var friends = yield $.getJSON("data/friends.json");
        console.log(friends);

        var youtubeVideos = yield $.getJSON("data/videos.json");
        console.log(youtubeVideos);

    });

    function genWrapper(generator){
        //set up generator / iterator
        var myGen = generator();
        //create function to handle the yielded value
        function handle(yielded){
            if(!yielded.done){
                yielded.value.then(function(data){
                    handle(myGen.next(data));
                });
            }
        }//end handle

        //return handle function, passing in myGen.next
        handle(myGen.next());
    }//end genWrapper

};
