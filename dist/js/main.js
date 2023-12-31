const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));


        showMenu = false;
    }
};



var data = {
    "english":{
        "firstName": "Keisuke",
        "lastName": "Miyata",
        "bio": "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to " +
                    "all challenging situations. I am able to work well both in a team environment as well as using own initiative. " +
                    "I am able to work well under pressure and adhere to strict deadlines. Not to mention, I am also a quick learner.",
        "jobTitle": "House Keeper",
        "jobTask1": "Managed guest supplies and replenished as required.",
        "jobTask2": "Performed regular sanitization of all guest bathrooms and clean rooms.",
        "jobTask3": "Analyzed every room individually to ensure efficient cleanliness as per requirement.",
        "jobTask4": "Coordinated with housekeeping lead and ensured clean hotel rooms and hallways."

    },
    "japanese": {
        "firstName": "宮田",
        "lastName": "圭佑",
        "bio": "私がエンジニアを目指した理由は当時、成長産業であって技術力次第で年齢に関係なく評価されつつ、社会貢献をしたいと考えていたからです。" +
            "世界中で優秀なエンジニアの人材不足が叫ばれる中、私自身がCSを学び国境に関係なく働くことにより、個人としての欲求と社会的貢献の両方を満たせると考えています。"+
            "エンジニアとしてはスタートは遅いかもしれませんが、日々自己研磨に取り組んでエンジニアとしての質の向上に取り組んでいきます。",
        "jobTitle": "ハウスキーパー",
        "jobTask1": "アメニティ、備品の補充、ルームサービス。",
        "jobTask2": "定期清掃、客室の清掃。",
        "jobTask3": "要求があれば客室の点検。",
        "jobTask4": "早朝の公共施設の清掃、チームでの特殊清掃。",
    }
}

// Function to set the selected language
function setSelectedLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    window.location.search = `?lang=${language}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'english';
    updateContent(selectedLanguage);
});

const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const link = document.querySelectorAll('.menu-nav__dropdown-content__item');
const bio = document.querySelector('.bio');
const languageBtn = document.querySelector('.language-btn');
const jobTitle = document.querySelector('.jobTitle');
const jobTask1 = document.querySelector('.jobTask1');
const jobTask2 = document.querySelector('.jobTask2');
const jobTask3 = document.querySelector('.jobTask3');
const jobTask4 = document.querySelector(".jobTask4");

link.forEach(event => {
    event.addEventListener('click', () => {
        const attr = event.getAttribute('language');
        setSelectedLanguage(attr);
    });
});

function updateContent(language){
    const currentPath = window.location.pathname;
    languageBtn.innerText = (language === "english" ? "EN": "JP");
if (currentPath.includes('index.html')){        
    firstName.innerText = data[language].firstName;
    lastName.innerText = data[language].lastName;

} else if (currentPath.includes('about.html')){
    bio.innerText = data[language].bio;
    jobTitle.innerText = data[language].jobTitle;
    jobTask1.innerText = data[language].jobTask1;
    jobTask2.innerText = data[language].jobTask2;
    jobTask3.innerText = data[language].jobTask3;
    jobTask4.innerHTML = data[language].jobTask4;
       
} else if (currentPath.includes('projects.html')){
    null
} else if (currentPath.includes('skill.html')) {
    null
} else if (currentPath.includes('contact.html')){
    null
}

};



