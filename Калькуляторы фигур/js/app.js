"use strict";
// Калькуляторы фигур на JavaScript
/* №1⊗jsPrStFC
Сделайте калькулятор, который будет находить площадь и периметр квадрата. */
// находим площадь
/* let area = document.querySelector('#area');
let resultArea = document.querySelector('#resultArea');
let resetArea = document.querySelector('#resetArea');

area.addEventListener('blur', function(){
	resultArea.textContent =  resultArea.textContent = (area.value * area.value) + 'см2'
});

area.addEventListener('focus', function(){
	area.value = '';
})

resultArea.addEventListener('click', function(){
	resultArea.textContent = '';
}) */

// периметр квадрата
/* let perimeter = document.querySelector('#perimeter');
let resultPerimeter = document.querySelector('#resultPerimeter');
let resetPerimeter = document.querySelector('#resetPerimeter');

perimeter.addEventListener('blur', function(){
	resultPerimeter.textContent = resultPerimeter.textContent = (+perimeter.value + +perimeter.value + +perimeter.value + +perimeter.value); 
});

perimeter.addEventListener('focus', function(){
	perimeter.value = '';
});

resetPerimeter.addEventListener('click', function(){
	resultPerimeter.textContent = '';
})
 */

/* №2⊗jsPrStFC
Сделайте калькулятор, который будет находить площадь и периметр прямоугольника. */
// площадь
/* let length = document.querySelector("#length");
let width = document.querySelector("#width");
let resultArea = document.querySelector("#resultArea");
let button = document.querySelector("button");

button.addEventListener("click", function () {
  resultArea.textContent = length.value * width.value;
});
 */

// периметр прямоугольника
/* let length = document.querySelector("#length");
let width = document.querySelector("#width");
let resultPerimeter = document.querySelector("#resultPerimeter");
let button = document.querySelector("button"); 

button.addEventListener('click', function(){
	resultPerimeter.textContent = 2 * (+length.value + +width.value);
}) */

/* №3⊗jsPrStFC
Сделайте калькулятор, который будет находить площадь круга и длину окружности. */
// площадь круга
/* let cerleArea = document.querySelector('#cerleArea');
let resultArea = document.querySelector('#resultArea');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	resultArea.textContent = (Math.PI * cerleArea.value * cerleArea.value).toFixed(2);
}) */

// длина окружности
/* let cerleWidth = document.querySelector('#cerleWidth');
let resultWidth = document.querySelector('#resultWidth');
let button = document.querySelector('button');

button.addEventListener('click', function(){
	resultWidth.textContent = (Math.PI * cerleWidth.value).toFixed(2)
}); */

// №4⊗jsPrStFC
// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
let sideA = document.querySelector("#sideA");
let sideB = document.querySelector("#sideB");
let sideC = document.querySelector("#sideC");
let resultArea = document.querySelector("#resultArea");
let button = document.querySelector("button");

button.addEventListener("click", areaOfTriangle);

/* function areaOfTriangle(sideA, sideB, sideC) {
  if (
    sideA.value > sideB.value + sideC.value ||
    sideB.value > sideA.value + sideC.value ||
    sideC.value > sideA.value + sideB.value
  )
    return "The triangle does not exist";
  const p = (sideA.value + sideB.value + sideC.value) / 2;
  return resultArea.textContent = (p * (p - sideA.value) * (p - sideB.value) * (p - sideC.value)) ** 0.5;
}
 */

let a;
let b;
let c;

function areaOfTriangle(a, b, c) {
  a = sideA.value;
  b = sideB.value;
  c = sideC.value;
  if (a > b + c || b > a + c || c > a + b) return "The triangle does not exist";
  const p = (a + b + c) / 2;
  resultArea.innerHTML += (p * (p - a) * (p - b) * (p - c)) ** 0.5;
}
//!!!!!!!!!!!!!!!!!!!!!