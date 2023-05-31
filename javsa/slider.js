const img = document.querySelector('.slider__image');
// Создадим массив всех изображений
const imgArr = ['./img/slide1.jpeg','./img/slide2.jpeg','./img/slide3.jpeg'];
// Создаем текущий индекс
let currentIndex = 0;


function nextIndex(direction){
    currentIndex +=direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if(currentIndex >= imgArr.length){
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex<0) {
        // Получаем последний элемент
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    //меняем атрибут src
    img.src = imgArr[index];

    
}
// Активный статус 
function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

 btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});





//кукисы
const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
	cookies.style.display = "none";
});





//аккордион
const accordion = () => {
    const btns = document.querySelectorAll(".accordion-head");
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active-style");
            //Следующий элемент
            this.nextElementSibling.classList.toggle("active-content");
            if (this.classList.contains("active-style")) {
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 50 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });

    const blocks = document.querySelectorAll(".accordion-block");

    blocks.forEach((block) => {
    	block.classList.add("animate__animated", "animate__bounceInUp");
    });
    btns.forEach((btn) => {
    	btn.addEventListener("click", function () {
    		if (!this.classList.contains("active-p")) {
    			btns.forEach((btn) => {
    				btn.classList.remove("active-p", "active-style");
    			});
    			this.classList.add("active-p", "active-style");
    		} else {
    			btns.forEach((btn) => {
    				btn.classList.remove("active-p", "active-style");
    			});
    		}
    	});
    });
};
accordion();




//модалька
const modal = document.getElementById("modal");
const btn = document.getElementById("open-modal__btn");
const closeBtn = document.querySelector(".modal__close");

btn.addEventListener("click", function () {
    modal.classList.add("modal_active");

    closeBtn.addEventListener("click", closeModal);

    function closeModal() {
        modal.classList.remove("modal_active");

        closeBtn.removeEventListener("click", closeModal);

        modal.removeEventListener("click", hideModal);
    }

    modal.addEventListener("click", hideModal);

    //Закрытие при клике вне зоны модального окна
    function hideModal(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});





// Важно, чтобы было постороено дом дерево и ничего не сломалось
window.addEventListener("DOMContentLoaded", function () {
	"use strict";
	//Получаем табы (переключатели), родительский элемент табов, и контент табов
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContect = document.querySelectorAll(".info-tabcontent");
	//Функция которая скрывает контентные табы
	function hideTabContect(a) {
		for (let i = a; i < tabContect.length; i++) {
			tabContect[i].classList.remove("show");
			tabContect[i].classList.add("hide");
		}
	}
	//Скрываются все кроме 1 элемента
	hideTabContect(1);
	//Функция показа контентных табов
	function ShowTabContect(b) {
		if (tabContect[b].classList.contains("hide")) {
			tabContect[b].classList.remove("hide");
			tabContect[b].classList.add("show");
		}
	}

	//Создаем событие клика на родителя, используя делегирование событий
	info.addEventListener("click", function (event) {
		let target = event.target;

		if (target && target.classList.contains("info-header-tab")) {
			// Связь элементов при совпадении target
			for (let i = 0; i < tab.length; i++) {
				//если совпадают
				if (target == tab[i]) {
					//Скрываем все табы
					hideTabContect(0);
					// удаляем класс активности таба
					tab.forEach((item) => {
						item.classList.remove("active");
					});
					//элементу target(на который кликнули) добавляем активный класс
					target.classList.add("active");

					//Совпадение по нумерации
					ShowTabContect(i);

					break;
				}
			}
		}
	});
	const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	const menu = document.querySelector("#menu").cloneNode(1);
	const body = document.body;

	hamb.addEventListener("click", hambHandler);

function hambHandler() {
//   e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}


// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
});














	





// инициализация .tabs как табов
new ItcTabs('.tabs');


filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
  // Добавить класс "show" (display:block) к отфильтрованным элементам и удалите класс "show" из элементов, которые не выбраны
	for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}

// Показать отфильтрованные элементы
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
		element.className += " " + arr2[i];
    }
	}
}

// Скрыть элементы, которые не выбраны
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
	}
	element.className = arr1.join(" ");
}

// Добавить активный класс к текущей кнопке управления (выделите ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
	});
}








