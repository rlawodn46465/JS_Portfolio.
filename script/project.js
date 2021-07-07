const icon = {
    html: '../images/icon-04.png',
    css: '../images/icon-05.png',
    js: '../images/icon-06.png',
    jquery: '../images/icon-07.png',
    react: '../images/icon-08.png',
    vue: '../images/icon-09.png',
    java: '../images/icon-10.png',
    nodejs: '../images/icon-11.png',
    mysql: '../images/icon-12.png',
    git: '../images/icon-13.png',
    github: '../images/icon-14.png',
    illustrator: '../images/icon-15.png',
    photoshop: '../images/icon-16.png'
}

const projectList = [{
        img: 'http://placeimg.com/230/336/people1',
        name: "프로젝트1",
        text: '설명1',
        skill: [icon.html, icon.css, icon.js]
    },
    {
        img: 'http://placeimg.com/230/336/people2',
        name: "프로젝트2",
        text: '설명2',
        skill: [icon.vue, icon.github, icon.illustrator]
    },
    {
        img: 'http://placeimg.com/230/336/people3',
        name: "프로젝트3",
        text: '설명3',
        skill: [icon.react, icon.nodejs, icon.github]
    },
    {
        img: 'http://placeimg.com/230/336/people4',
        name: "프로젝트4",
        text: '설명4',
        skill: [icon.react, icon.nodejs, icon.github]
    }
]

function makePanel() { //패널 만들기
    const panelCount = projectList.length; //패널 개수
    const panelOneAngle = 360 / panelCount; //패널 한개 각도
    const panelRadius = 600; //패널 떨어진 거리
    const carousel = document.querySelector('.carousel'); //넣을곳(ul)
    for (var i = 0; i < panelCount; i++) {
        const li = document.createElement("li");
        const panelImg = 'url("' + projectList[i].img + '")'
        li.setAttribute('class', 'panel');
        li.setAttribute('id', 'panel' + i);
        li.style.transform = 'rotate(' + panelOneAngle * i + 'deg)' + 'translateY(-' + panelRadius + 'px)'
        li.style.backgroundImage = panelImg;
        carousel.appendChild(li);
    }
}

function makePanelBack(count) { //프로젝트 설명 만들기
    const backPanel = document.querySelector('.right_card .back');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const bigDiv = document.createElement('div');
    const imgLength = projectList[count].skill.length;
    bigDiv.setAttribute('class', 'skill_inner');
    h2.innerHTML = projectList[count].name;
    p.innerHTML = projectList[count].text;
    for (let i = 0; i < imgLength; i++) {
        const img = document.createElement('img');
        img.setAttribute('src', projectList[count].skill[i]);
        div.appendChild(img);
    }
    div.setAttribute('class', 'skill_list');
    bigDiv.append(h2, p, div);
    backPanel.appendChild(bigDiv);
}


function panelClick() {
    const panel = document.querySelectorAll('.panel');
    for (let i = 0; i < panel.length; i++) {
        panel[i].onclick = function (event) {
            const screenWidht = window.innerWidth;
            event.stopPropagation()
            const childClass = document.getElementsByClassName('skill_inner');
            const backPanel = document.querySelector('.right_card .back');
            const backPanelChild = document.querySelector('.skill_inner');
            if (childClass.length > 0) {
                backPanel.removeChild(backPanelChild);
            }
            console.log(screenWidht);
            const panelImg = 'url("' + projectList[i].img + '")'
            const leftCard = document.querySelector('.left_card');
            const rightCard = document.querySelector('.right_card');
            if (screenWidht <= 1023) {
                console.log("보임");
                leftCard.style.display = "block";
                rightCard.style.display = "block";
            }
            leftCard.firstElementChild.style.transform = "rotateY(0deg)";
            leftCard.lastElementChild.style.transform = "rotateY(180deg)";
            rightCard.firstElementChild.style.transform = "rotateY(0deg)";
            rightCard.lastElementChild.style.transform = "rotateY(180deg)";
            setTimeout(function () {
                makePanelBack(i);
                leftCard.firstElementChild.style.transform = "rotateY(-180deg)";
                leftCard.lastElementChild.style.transform = "rotateY(-0deg)";
                leftCard.lastElementChild.style.backgroundImage = panelImg;
                rightCard.firstElementChild.style.transform = "rotateY(-180deg)";
                rightCard.lastElementChild.style.transform = "rotateY(-0deg)";
            }, 500);
        }
        document.querySelector('#section3').onclick = function (event) {
            const screenWidht = window.innerWidth;
            event.stopPropagation()
            const leftCard = document.querySelector('.left_card');
            const rightCard = document.querySelector('.right_card');
            leftCard.firstElementChild.style.transform = "rotateY(0deg)";
            leftCard.lastElementChild.style.transform = "rotateY(180deg)";
            rightCard.firstElementChild.style.transform = "rotateY(0deg)";
            rightCard.lastElementChild.style.transform = "rotateY(180deg)";
            if (screenWidht <= 1023) {
                setTimeout(function () {
                    leftCard.style.display = "none";
                    rightCard.style.display = "none";
                }, 500)
            }
        }
    }
}
makePanel()
panelClick()