window.onload = function(){
function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    const ul = document.getElementById('users');
    const url = 'https://randomuser.me/api/?results=10';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let users = data;
        return users.map(function(user) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        span.innerHTML = `Name: ${user.title}`;
        img.src = user.thumbnailUrl;
        append(li, img);
        append(li, span);
        append(ul, li);
        })
    })
    .catch(function(error) {
        console.log("error");
        console.log(JSON.stringify(error));
    });

}