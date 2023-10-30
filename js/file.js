// Поле ввода для названия ёмкости.
let inputNameOne = document.querySelector('.input-name-1');
let inputNameTwo = document.querySelector('.input-name-2');

// Название ёмкости на img-tank
let namberTankOne = document.querySelector('.block-namberTank-1');
let namberTankTwo = document.querySelector('.block-namberTank-2');

// Переменные in/out
let inputInOne = document.querySelector('.inMeters-1');
let outOne     = document.querySelector('.out-1');

let inputInTwo = document.querySelector('.inMeters-2');
let outTwo     = document.querySelector('.out-2');

// Культура
let culturaOne = document.querySelector('.culturaOne');
let culturaTwo = document.querySelector('.culturaTwo');

// Высота ёмкости.
const heightOneTanc = 32;
const heightTwoTanc = 19;

// Значение культуры.
culturaOne.onchange = function() {
    console.log(+culturaOne.value); // на выходе int
};

culturaTwo.onchange = function() {
    console.log(this.value); // на выходе string
    console.log(Object.values(this));
}

// Вызывается при изменении значения в поле ввода(номер ёмкости).
inputNameOne.oninput = function() {
    // приобразует строку в число с помощю '+' (даже если type="number")
    if((+inputNameOne.value > 3 && +inputNameOne.value < 8) || inputNameOne == null) {
        namberTankOne.innerHTML = `<h3 class="namberTank-1">${inputNameOne.value}</h3>`;
    } else {
        namberTankOne.innerHTML = '<h3 class="namberTank-1">?</h3>';
    };
};

inputNameTwo.oninput = function() {
    // приобразует строку в число с помощю '+' (даже если type="number")
    if((+inputNameTwo.value > 13 && +inputNameTwo.value < 20) || inputNameTwo == null) {
        namberTankTwo.innerHTML = `<h3 class="namberTank-2">${inputNameTwo.value}</h3>`;
    } else {
        namberTankTwo.innerHTML = '<h3 class="namberTank-2">?</h3>';
    };
};


// Вызывается при изменении значения в поле ввода(вводные данные).
// Ёмкость №4-7
inputInOne.oninput = function() {
    outOne.innerHTML = (inputInOne.value * 27.5);
};
// Ёмкость №14-19
inputInTwo.oninput = function() {
    // Заполнено
    // outTwo.innerHTML = (culturaTwo.value * inputInTwo.value) / heightTwoTanc;
    // Осталось до верха заполнить.
    let t = (culturaTwo.value * inputInTwo.value) / heightTwoTanc;
    outTwo.innerHTML = culturaTwo.value - t;
};