import { screenSize } from "./_functions.js";

export let cvs = document.getElementById("canvas"), // cvs = canvas
ctx = cvs.getContext('2d');  // cts = context
            

            
// Задать размер игровой доски.
screenSize();
console.log(cvs.width);
console.log(cvs.height);