window.onload = () => {
/* Simple Chat using generators
    var a = 0;
    function* gen(){
        console.log("Me: Hello there!");
        yield a++;
        console.log("Me: How are you?");
        yield a++;
        console.log("You: I'm fine!");
    }

    var myChat = gen();
    myChat.next();

    setTimeout(() =>{
        if(a > 0){
            myChat.next();
        }
    }, 1500);

    setTimeout(() =>{
        if(a > 1){
            myChat.next();
        }
    }, 3000);
*/

//passing value using yield

    function* gen(){
        var x = yield "physical exercise";
        var y = yield "bench press";
        var z = yield "inclined bench press";
        var total = x + y + z;
        return total;
    }

    var myGen = gen();
    console.log(myGen.next()); // -> physical exercise
    console.log(myGen.next(30));
    console.log(myGen.next(15));
    console.log(myGen.next(15));
}
