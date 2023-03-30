var currentImg = 0;
var imgs = document.querySelectorAll(',slider img');
let dots = document.querySelectorAll(',dot');
var intervall = 3000;

var secondEventTitle = 'Hi! *Jaytech* The place to gain massive knowledge';

var thirdEventDate = new Date('today');

var thirdEventDateString = thirdEventDate.toLocaleDateString('en-us',{year:
'numeric', month: 'short', day: 'numeric'});
var days = calculateDays(new Date(), thirdEventDate)
|| 0;

const countdownText = days > 0 ? '${days} days left'
: 'Live Now';

document.getElementById('img-2').src = secondImgUrl;
document.getElementById('img-3').src = thirdImgUrl;

var timer = setInterval(changeSlide, intervall);

function changeSlide(n){
    for (var i = 0; i < imgs.length; i++){
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace('active', '');
    }

    currentImg = n;

    if (n != undefined){
        clearInterval(timer);
        timer =setInterval(changeSlide, intervall);
        currentImg = n;
    }
    var timer = setInterval(changeSlide, interval);
    currentImg = (currentImg + 1) % imgs.length;
        if (n !=undefined){
            clearInterval(timer);
            timer = setInterval(changeSlide, interval);
            currentImg = n
        }
    

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += 'active';
}


