/* Scrolling animations */
var scroll = window.requestAnimationFrame || 
             function(callback) { window.setTimeout(callback, 1000/60)};
var elemToShow = document.querySelectorAll('.show_on_scroll'); 

function loop() {
    elemToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible'); 
        }
    });
    scroll(loop); 
}

loop(); 

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0]; 
    }
    var rect = el.getBoundingClientRect(); 
    return (
        (rect.top <= 0 && rect.bottom >= 0) || 
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

/* Smooth transitions */
function smoothScroll(target, duration) {
    var target = document.querySelector(target); 
    var targetPosition = target.getBoundingClientRect().top; 
    var startPosition = window.pageYOffset; 
    var distance = targetPosition - startPosition; 
    var startTime = null; 

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime; 
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration); 
        window.scrollTo(0, run); 
        if (timeElapsed < duration) requestAnimationFrame(animation); 
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
}

var home_scroll = document.querySelector('.name'); 
home_scroll.addEventListener('click', function() {
    smoothScroll('#home', 700); 
});

var about_scroll = document.querySelector('.about_selector'); 
about_scroll.addEventListener('click', function() {
    smoothScroll('#about', 700); 
});

var project_scroll = document.querySelector('.project_selector'); 
project_scroll.addEventListener('click', function() {
    smoothScroll('#projects', 700); 
});

var music_scroll = document.querySelector('.music_selector'); 
music_scroll.addEventListener('click', function() {
    smoothScroll('#music', 700); 
});

var about_scroll_mobile = document.querySelector('.about_selector_mobile'); 
about_scroll_mobile.addEventListener('click', function() {
    smoothScroll('#about', 700); 
});

var project_scroll_mobile = document.querySelector('.project_selector_mobile'); 
project_scroll_mobile.addEventListener('click', function() {
    smoothScroll('#projects', 700); 
});

var music_scroll_mobile = document.querySelector('.music_selector_mobile'); 
music_scroll_mobile.addEventListener('click', function() {
    smoothScroll('#music', 700); 
});

var home_scroll_mobile = document.querySelector('.home_selector_mobile'); 
home_scroll_mobile.addEventListener('click', function() {
    smoothScroll('#home', 700); 
});