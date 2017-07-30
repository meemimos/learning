window.onload = function(){

// repeat
    var str = "ha ";
    console.log(str.repeat(3));

// startsWith
    var str = "Hello world!";
    console.log("Our String: " + str);
    console.log("Starts with H? true/false-> " +
                str.startsWith("H", 0)); // 2nd parameter for position

// endsWith
    console.log("Ends with wo? true/false-> " +
                str.endsWith("wo", str.length - 4));

// includes
    var test = "My name is Mimos";

    console.log(test.includes("name"));



    /* NEW STRING METHODS
    - repeat
    - startsWith
    - endsWith
    - includes
    */
}
