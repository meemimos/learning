window.onload = function() {
    var text = ['foo', 'bar', 'baz'];
           i = 0;
           $div = $('#myDiv');
       setInterval(function ()
       {

           $div.text(text[i++ % text.length]);
              console.log(i++ % text.length);
        }, 1000);

}
