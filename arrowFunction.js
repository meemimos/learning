window.onload = function(){

/*
    var sayHello = () => console.log("Hello!");

    sayHello();

    var sayHello = (name) => console.log("Hello, " + name);
    // var sayHello = name => console.log("Hello, " + name);
    // for one parameter we dont need parenthesis

    sayHello("Mimos");
*/

    var ninja = {
        name: "Mimos",
        chop(x) {

            window.setInterval(() =>{
                if(x > 0){
                    console.log(`${this.name} chopped the enemy.`)
                };
                x--;
            }, 1000);
        }
    }

    ninja.chop(7);
}
