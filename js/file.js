// Поле ввода для названия ёмкости.
let inputNameOne = document.querySelector('.input-nameOne');
let inputNameTwo = document.querySelector('.input-nameTwo');

// Название ёмкости на img-tank
let namberTankOne = document.querySelector('.block-namberTankOne');
let namberTankTwo = document.querySelector('.block-namberTankTwo');

// Переменные in/out/outIn
let inputInOne = document.querySelector('.inMetersOne');
let outOne     = document.querySelector('.outOne');
let outOneIn   = document.querySelector('.outOneIn');

let inputInTwo = document.querySelector('.inMetersTwo');
let outTwo     = document.querySelector('.outTwo');
let outTwoIn   = document.querySelector('.outTwoIn');

// Культура
let culturaOne = document.querySelector('.culturaOne');
let culturaTwo = document.querySelector('.culturaTwo');

// Высота ёмкости.
const heightOneTanc = 32;
const heightTwoTanc = 21.7;

// Холостой ход рулетки.
// Ёмкость 4 - 7.
const idlingOne = 1.5;
// Ёмкость 14 - 19.
const idlingTwo = 2.3;

// Значение культуры ( ТЕХНИЧЕСКАЯ ФУНКЦИЯ для проверки значения(зависит от культуры)).
culturaOne.onchange = function() {
    console.log(+culturaOne.value); // на выходе int
};

culturaTwo.onchange = function() {
    console.log(this.value); // на выходе string
    console.log(Object.values(this)); // значения объекта вызвавшее эту функцию.
}

// Вызывается при изменении значения в поле ввода(номер ёмкости).
// 4 - 7 ёмкости.
inputNameOne.oninput = function() {
    // приобразует строку в число с помощю '+' (даже если type="number")
    if((+inputNameOne.value > 3 && +inputNameOne.value < 8) || inputNameOne == null) {
        namberTankOne.innerHTML = `<h3 class="namberTankOne">${inputNameOne.value}</h3>`;
    } else {
        namberTankOne.innerHTML = '<h3 class="namberTankOne">?</h3>';
    };
};
// 14 - 19 ёмкости.
inputNameTwo.oninput = function() {
    // приобразует строку в число с помощю '+' (даже если type="number")
    if((+inputNameTwo.value > 13 && +inputNameTwo.value < 20) || inputNameTwo == null) {
        namberTankTwo.innerHTML = `<h3 class="namberTankTwo">${inputNameTwo.value}</h3>`;
    } else {
        namberTankTwo.innerHTML = '<h3 class="namberTankTwo">?</h3>';
    };
};


// Вызывается при изменении значения в поле ввода(вводные данные).
// Ёмкость №4-7
inputInOne.oninput = function() {
    if (inputInOne.value > (heightOneTanc + idlingOne)) {
        outOne.innerHTML   = '?';
        outOneIn.innerHTML = '?';
    }  else if (inputInOne.value < idlingOne) {
        outOne.innerHTML = '???';
        outOneIn.innerHTML = '???';
    } else {
        let t = (culturaOne.value * (inputInOne.value - idlingOne)) / heightOneTanc;
        outOne.innerHTML = Math.round(t); // округляем.
        outOneIn.innerHTML = Math.round(culturaOne.value - t);
    };
};
// Ёмкость №14-19
inputInTwo.oninput = function() {
    // Осталось до верха заполнить.
    if (inputInTwo.value > (heightTwoTanc + idlingTwo)) {
        outTwo.innerHTML = '?';
        outTwoIn.innerHTML = '?';
    } else if (inputInTwo.value < idlingTwo) {
        outTwo.innerHTML = '???';
        outTwoIn.innerHTML = '???';
    } else {
        let t = (culturaTwo.value * (inputInTwo.value - idlingTwo)) / heightTwoTanc;
        outTwo.innerHTML = Math.round(t);
        outTwoIn.innerHTML = Math.round(culturaTwo.value - t);
    };
};