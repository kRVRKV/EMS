var button = document.getElementById('button');
var div = document.getElementById('reveal');
div.style.display = 'none';

button.onclick = function() {
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
