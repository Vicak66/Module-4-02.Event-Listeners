var count = 0;

var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// Todo: add a comment describing the functionality of the following code:
function setCounterText() {
    countEl.textContent = count;
}

// Todo: add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
    count++;
    setCounterText();
});

decrementEl.addEventListener('click', function() {
    if (count > 0) {
        count--;
        setCounterText();
    }
});