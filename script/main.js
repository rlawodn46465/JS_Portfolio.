setTimeout(function () {    //섹션1 텍스트 나오는 시간
    $('#section1 h2').fadeOut();
    $('#section1 .new_text').fadeIn();
}, 6300);

setTimeout(function () {    //섹션1 첫번째 텍스트 나오는 시간
    $('#section1 .text_tag').append("11<br>")
}, 1389)

setTimeout(function () {    //섹션1 두번째 텍스트 나오는 시간
    $('#section1 .text_tag').append("12<br>")
}, 3900)

window.addEventListener('scroll', () => {   //스크롤 헤더 색 변화
    let scrollLocation = document.documentElement.scrollTop;
    if (scrollLocation > 10) {
        $('header').css("background-color", "rgba(0,0,0,0.8)")
    } else if (scrollLocation < 10) {
        $('header').css("background-color", "#17171B");
    }
})

setInterval(function () {   //화살표 움직임
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

//스킬 아이콘 보여주기
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

const screenWidht = window.innerWidth;
if (screenWidht <= 767) { //터치 이동
    let satrtTouch = null;
    let endTouch = null;

    function start(e) {
        satrtTouch = e.targetTouches[0].clientY;
    }

    function end(e) {
        endTouch = e.changedTouches[0].clientY;
        if (satrtTouch - endTouch < -10) {
            console.log("내려감");
            if (page == 1) return; //처음 페이지면
            page--;
        } else if (satrtTouch - endTouch >= -10 && satrtTouch - endTouch <= 10) {
            console.log("유지");
        } else if (satrtTouch - endTouch > 10) {
            console.log("올라감");
            if (page == lastPage) return; //마지막 페이지면
            page++;
        }
        var postTop = (page - 1) * $(window).height();
        $("html").animate({
            scrollTop: postTop
        });
    }

    function move(e) {
        
    }

    window.addEventListener("touchstart", start);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", end);
}

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