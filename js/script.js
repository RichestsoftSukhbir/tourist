// navbar toggle script
let navMenu = document.querySelector('.navbar-collapse');
let ham = document.querySelector('.navbar-toggler');

ham.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
    ham.classList.toggle('active');
});

// rating progressbar
let ratingBar = document.querySelectorAll('.star-progress-bar');
ratingBar.forEach(function (el) {
    let fillSize = el.getAttribute('data-percent');
    el.children[0].style.width = `${fillSize}%`;
    el.nextElementSibling.innerText = `${fillSize}%`;
});

// review trigger
if (document.querySelector('.review-trigger')) {
    let reviewTrigger = document.querySelector('.review-trigger');
    let reviewBlk = document.querySelector('.write-review');
    let reviewOvrly = document.querySelector('.review-overlay');
    reviewTrigger.addEventListener('click', function () {
        reviewBlk.classList.toggle('active');
    });
    reviewOvrly.addEventListener('click', function () {
        reviewBlk.classList.toggle('active');
    });
}

$('.popular_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    prevArrow: $('.slide_arrow .arrow_left'),
    nextArrow: $('.slide_arrow .arrow_right'),
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.guider_outer').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// custom tabs
$(".tab-menu li a").on("click", function () {
    var target = $(this).attr("data-rel");
    $(".tab-menu li a").removeClass("active");
    $(this).addClass("active");
    $("#" + target)
        .fadeIn("slow")
        .siblings(".tab-box")
        .hide();
    return false;
});

// show password
if (document.querySelectorAll(".show-pass")) {
    let showPass = document.querySelectorAll(".show-pass");
    showPass.forEach(function (element) {
        element.addEventListener("click", (e) => {
            if (e.target.previousElementSibling.type === "password") {
                e.target.previousElementSibling.type = "text";
                e.target.classList.remove("fa-eye");
                e.target.classList.add("fa-eye-slash");
            } else {
                e.target.previousElementSibling.type = "password";
                e.target.classList.remove("fa-eye-slash");
                e.target.classList.add("fa-eye");
            }
        });
    });
}

// lgin / signup popup
let nextStep = document.querySelectorAll('.next-step');
let mailPopup = document.querySelector('.mail-sent-popup');
let mailPopOvrly = document.querySelector('.popup-overlay');
nextStep.forEach(function(el) {
    el.addEventListener("click", (e) => {
        mailPopup.classList.toggle('active');
    });
});
mailPopOvrly.addEventListener('click', (e)=> {
    mailPopup.classList.toggle('active');
});

// id proof updater

/* let idProofSlot = document.querySelector('.id_proof');
idProofSlot.addEventListener('change', function(e) {
    if(e.target.value) {
        e.target.nextElementSibling.children[1].style.display = 'none';
    } else {
        if(e.target.value == '') {
            e.target.nextElementSibling.children[1].style.display = 'block';
        } else {
            e.target.nextElementSibling.children[1].style.display = 'none';
        }
    }
}); */

// Int Tel Input
if (document.querySelector("#phone")) {
    var phoneInput = document.querySelector("#phone");
    window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
        initialCountry: "auto",
        geoIpLookup: function (callback) {
            $.get('https://ipinfo.io', function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "us";
                callback(countryCode);
            });
        },
    });
}