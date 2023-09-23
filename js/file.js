// Название ёмкости.
let inputName  = document.querySelector('.input-name');
let namberTank = document.querySelector('.block-namberTank');

// Переменные in/out
let inputIn   = document.querySelector('.inMeters');
let out = document.querySelector('.out');

// inputIn.addEventListener('input', () => {
//     out.innerHTML = (inputIn.value * 27.5);
// });

inputIn.oninput = function() {
    out.innerHTML = (inputIn.value * 27.5);
}

inputName.oninput = function() {
    // приобразует строку в число с помощю +
    // даже если type="number"
    // console.log( inputName.value );
    if((+inputName.value > 3 && +inputName.value < 8) || inputName == null) {
        namberTank.innerHTML = `<h3 class="namberTank">${inputName.value}</h3>`;
        console.log( 'if' );
    } else {
        // inputName.value = '4';
        console.log( inputName.value );
        console.log( 'else' );
    }
    // namberTank.innerHTML = `<h3 class="namberTank">${inputName.value}</h3>`;
}