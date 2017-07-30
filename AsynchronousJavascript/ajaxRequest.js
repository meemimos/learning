window.onload = function (){

    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
    }
    
    http.open("GET", "data/tweets.json", true);
    http.send();


// jquery method
    // $.getJSON("data/news.json", (data)=>{
    //     console.log(data);
    // });
    // console.log("test");
};



// AJAX REQUEST
/* readyState

0 - REQUEST NOT INITIALIZED
1 - REQUEST HAS BEEN SET UP
2 - REQUEST HAS BEEN SENT
3 - REQUEST IS IN PROCESS
4 - REQUEST IS COMPLETE

*/
