const calcScrollValue = () => {
    const scrollProgress = document.querySelector('.progress');
    
    const pos = document.documentElement.scrollTop;
    const calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = 'grid';
    } else {
        scrollProgress.style.display = 'none';
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#8dcaff ${scrollValue}%, #5696ce ${scrollValue}%)`
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;



document.querySelector('.bars__menu').addEventListener('click', animateBars);

const navLinks = document.querySelector('.nav__links');
const line1Bars = document.querySelector('.line1__bars--menu');
const line2Bars = document.querySelector('.line2__bars--menu');
const line3Bars = document.querySelector('.line3__bars--menu');

function animateBars() {
    line1Bars.classList.toggle('activeline1__bars--menu');
    line2Bars.classList.toggle('activeline2__bars--menu');
    line3Bars.classList.toggle('activeline3__bars--menu');
    navLinks.classList.toggle('navLinks--visible');
}

document.querySelector('.nav__item--home').addEventListener('click', () => {
    animateBars();     
});
document.querySelector('.nav__item--about-me').addEventListener('click', () => {
    animateBars();
});
document.querySelector('.nav__item--skills').addEventListener('click', () => {
    animateBars();
});
document.querySelector('.nav__item--contact').addEventListener('click', () => {
    animateBars();
});


const skillsContainer = document.getElementById('skills__container');
skills = new Array();

skills[0] = ['./images/icons/html.png', 'Html'],
    skills[1] = ['./images/icons/css.png', 'Css'],
    skills[2] = ['./images/icons/js.png', 'JavaScript'],
    skills[3] = ['./images/icons/react.png', 'React'],
    skills[4] = ['./images/icons/boostrap.png', 'Bootstrap'],
    skills[5] = ['./images/icons/tailwind.png', 'Tailwind'],
    skills[6] = ['./images/icons/mongoDB.png', 'MongoDB'],
    skills[7] = ['./images/icons/java.png', 'Java'],
    skills[8] = ['./images/icons/mySql (2).png', 'MySQL'],
    skills[9] = ['./images/icons/nodejs.png', 'NodeJS'],
    skills[10] = ['./images/icons/php.png', 'Php'],
    skills[11] = ['./images/icons/gitHubBlack.png', 'GitHUb']

if (skillsContainer) {
    for (i = 0; i < skills.length; i++) {

        const createDiv = document.createElement('div');
        const createImg = document.createElement('img');
        const createName = document.createElement('h6');

        createDiv.setAttribute('class', 'skills__iconSkill');

        createImg.setAttribute('src', skills[i][0]);

        createName.innerHTML = skills[i][1];

        skillsContainer.appendChild(createDiv);
        createDiv.appendChild(createImg);
        createDiv.appendChild(createName);
    }
}

const namee = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    sendEmail();

    form.reset();
    
    return false;
});




/*const form = document.querySelector('#form')
 addEventListener('submit', formValidation);


function formValidation(e) {
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const messageError = document.querySelector('#messageError'); 
    

    if (name === '') {
        nameError.textContent = 'Name cannot be empty';
        
    } else {
        nameError.textContent = '';
        
    }
    if (email === '') {
        emailError.textContent = 'Email cannot be empty';
        
    } else {
        emailError.textContent = '';
    }
    if (message === '') {
        messageError.textContent = 'Message cannot be empty';
        
    } else {
        messageError.textContent = '';
    }
} */

const sendEmail = () => {
    const ebody = `
            <b>name: </b>${namee.value}
            <br>
            <b>email: </b>${email.value}
            <br>
            <b>message: </b>${message.value}
            <br>`

    Email.send({
        SecureToken: "d7e3c435-c3e5-4638-9126-cc84c40ceecb",
        To: 'alexaruba18@gmail.com',
        From: "alexandergomezweb@gmail.com",
        Subject: "Email form " + email.value,
        Body: ebody
    }).then(
        message => alert(message),
    );
}

