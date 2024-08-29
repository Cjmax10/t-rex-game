const joke = document.getElementById('joke');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function() {
    if(this.readyState === 4) {
        if(this.status == 200) {
            joke.innerHTML = JSON.parse(this.responseText).value;
        } else {

        }
    }
}

xhr.send();