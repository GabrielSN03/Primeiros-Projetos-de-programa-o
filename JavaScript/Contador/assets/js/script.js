/*var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0 ;

function increment(){
    currrentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currrentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
    if(count >= 0){
        CURRENT_NUMBER.style.color = 'green';}
} 

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
    if(count < 0){
        CURRENT_NUMBER.style.color = 'red';}
} 




