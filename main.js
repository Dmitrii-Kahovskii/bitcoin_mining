// мобильная навигация
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});

// Находим ссылки внутри мобильной навигации
const navLinks = document.querySelectorAll('.nav a');

// Обходим ссылки методом forEach
navLinks.forEach(function (item) {
	// Для каждой ссылки добавляем прослушку по событию "Клик"
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
		nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
	});
});
            // ВИДЕО
            const videoBtn = document.querySelector('#button-video');
            const videoBtnIcon = document.querySelector('#video-button-object-icon');
            // const videoOverlay = document.querySelector('#video-story-owerlay');
            const videoFile = document.querySelector('#video');

            videoBtn.addEventListener('click', function(){
                if (videoFile.paused) {
                    videoFile.play();
                    videoBtnIcon.src = './img/acons/pause-icons.svg';
                } else {
                    videoFile.pause();
                    videoBtnIcon.src = './img/acons/playerplay.svg';
                }
            });

            //    ACCORDEON

const headers = document.querySelectorAll("[data-name='accordeon-title']");
console.log(headers);
const icon = document.querySelectorAll('list-header > fag__img');
console.log(icon);
headers.forEach(function (item) {
    item.addEventListener('click', showContent);
    // item.childNodes[2].classList.toggle('none')
        })
        
function showContent() {
     this.nextElementSibling.classList.toggle('none');
        };

        // aos animate on scroll library

  AOS.init({
    once: true,
    // disable: phone,
  });