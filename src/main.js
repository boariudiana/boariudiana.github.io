
// SLIDESHOW FUNCTIONALITY
let i = 0;
let images = [];
let time = 3000;
 
// Image slideshow list
images[0] = 'assets/photos/accueil/slideshow1.jpg';
images[1] = 'assets/photos/accueil/slideshow2.jpg';
images[2] = 'assets/photos/accueil/slideshow3.jpg';

// change image
function changeImage () {
    document.slide.src = images[i] ;

    let slideShow = $('.slide-show');
    let slideBar = $(`.slide-bar-${i}`);
    let slideBarPrev = $(`.slide-bar-${i-1}`);

    if (i === 0) {
        $(`.slide-bar-2`).removeClass('active')
    }

    slideBar.addClass(`active`);
    slideBarPrev.removeClass(`active`);
    


    if ( i < images.length - 1 ) {
        i++;
    } else {
        i = 0;
    }


    setTimeout(changeImage , time)
}

window.onload = changeImage;



// ROTATING HEADING RESIZE 

// let rotatedHeadingHeight = $('.rotated-container').height(); 

// $(".heading-rotated").css("width", rotatedHeadingHeight);

// FIXED NAVBAR 


$(document).ready(function() {
    var height=$(".section-options").height();
    var startingPoint=$(".section-options").offset().top+height; 
    console.log(startingPoint)
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(); 
        console.log(scrollTop)
        if (scrollTop >= startingPoint) {
            $(".navigation").addClass("show")
        } else {
            $(".navigation").removeClass("show")
        }
    });
});



