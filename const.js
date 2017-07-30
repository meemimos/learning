window.onload = function(){

    const pi = 3;

    function calcArea(r){
        const pi = 3.142; // local value for pi  can be use within a function
        console.log("The area of circle is " + pi * r * r + ".");
    }

    console.log(pi); // pi is using a global pi value
    calcArea(3);
}
