'use strict';
let numberOne = prompt("Введите число", "число 1");
let numberTwo = prompt("Введите число", "число 2");
let operation = prompt("Введите действие", "+ - * /");
let sum = 0;
let a = -numberOne;
let b = -numberTwo;
sum = a -(-b);


function showMessage() 
{
    switch (operation) {
	case "+":
    		alert (Math.abs(sum));
   		break;
  	case "-":
    		alert(numberOne - numberTwo);
    		break;
  	case "*":
    		alert(numberOne * numberTwo);
    		break;
	case "/":
    		alert(numberOne / numberTwo);
    		break;
  	default:
    		alert( "Нет бывыет такого" );
	}
}
   
showMessage()

