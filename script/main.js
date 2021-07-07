setTimeout(function () {
    $('#section1 h2').fadeOut();
    $('#section1 .new_text').fadeIn();
}, 6300);

setTimeout(function () {
    $('#section1 .text_tag').append("11<br>")
}, 1389)

setTimeout(function () {
    $('#section1 .text_tag').append("12<br>")
}, 3900)

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > 10) {
        $('header').css("background-color", "rgba(0,0,0,0.8)")
    } else if (scrollLocation < 10) {
        $('header').css("background-color", "#17171B");
    }
})

setInterval(function () {
    if ($('#section2 img.arrow').css("bottom") == "300px") {
        $('#section2 img.arrow').animate({
            "bottom": 250
        })
    } else {
        $('#section2 img.arrow').animate({
            "bottom": 300
        })
    }
}, 500);

const skillIconList = document.querySelectorAll('.skill_box>div img');
const frontBlackList = document.querySelectorAll('.front_black');

$('.front_black').mouseenter(function () {
    $(this).stop().animate({
        "opacity": 1
    });
});
$('.front_black').mouseleave(function () {
    $(this).stop().animate({
        "opacity": 0
    });
});


$(function () {



    $(window).on("wheel", function (event) {
        // 이벤트 핸들러: window 객체에 이벤트가 발생하면 실행할 기능
        // → 마우스 휠을 굴리면 window 객체에서 wheel 이벤트가 발생한다.

        console.log("deltaY = " + event.originalEvent.deltaY);
    });
});

//스크롤 영역 이동
window.addEventListener("wheel", function (e) {
    e.preventDefault(); //스크롤 못씀
}, {
    passive: false
});

let page = 1;
var lastPage = $("section").length;

$("html").animate({
    scrollTop: 0
}, 10);

$(window).on("wheel", function (e) {
    if ($("html").is(":animated")) return;
    if (e.originalEvent.deltaY > 0) { //밑으로
        if (page == lastPage) return; //마지막 페이지면
        page++;
    } else if (e.originalEvent.deltaY < 0) { //위로
        if (page == 1) return; //처음 페이지면
        page--;
    }
    var postTop = (page - 1) * $(window).height();
    $("html").animate({
        scrollTop: postTop
    });
});

$("#top").on("click", function (event) {
    event.preventDefault();
    page = 1;
    $("html").animate({
        scrollTop: 0
    }, 600);
});
$("#menu1").on("click", function (event) {
    event.preventDefault();
    page = 2;
    $("html").animate({
        scrollTop: 969
    }, 600);
});
$("#menu2").on("click", function (event) {
    event.preventDefault();
    page = 3;
    $("html").animate({
        scrollTop: 1938
    }, 600);
});
$("#menu3").on("click", function (event) {
    event.preventDefault();
    page = 4;
    $("html").animate({
        scrollTop: 2907
    }, 600);
});
$("#menu4").on("click", function (event) {
    event.preventDefault();
    page = 5;
    $("html").animate({
        scrollTop: 3816
    }, 600);
});