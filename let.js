window.onload = function(){

    var items = document.getElementsByTagName("li");

    for(let x = 0; x < items.length; x++){ // let instead of var
        items[x].onclick = function(){
            console.log(x+1);
        }
    }

}

/* inside body in index.html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>

</ul>
*/
