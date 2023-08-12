let btn = document.querySelector('#btn');
let stop = document.querySelector('#stop');
let p = document.querySelector('p');
let timerId;
btn.addEventListener('click', function () {
timerId = setInterval(function() {
    p.textContent = +p.textContent;
    p.textContent = --p.textContent;
    if (p.textContent <= 90){
        clearInterval(timerId);
    }
}, 1000);
});
stop.addEventListener('click', function() {
    clearInterval(timerId);
});