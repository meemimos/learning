window.onload = function(){

    var name = "Mimos";
    var sem = "Seventh";

    var student = {
        name, sem,
        sub(x){
            console.log(`Total subject are ${x}`);
        }
    };

    console.log(student.sub(6));
}
