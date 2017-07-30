window.onload = function(){

/*
    var names = new Set();

    names.add("Mimos").add("Aakar").add("Luv");
    // names.delete("Luv");
    // names.clear(); //to delete all

    console.log(names.has("Mimos"));
    console.log(names.size);
    console.log(names);
*/

    var ninjas = ["Mimos", "Aakar", "Luv", "Kus", "Aakar", "Luv"];
    console.log(ninjas);

    var refinedNinjas = new Set(ninjas);
    console.log(refinedNinjas);

    ninjas = [...refinedNinjas]; // using spread operator
    console.log(ninjas);


}
