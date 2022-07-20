var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const INCREMENT = document.getElementById('increment');
const DECREMENT = document.getElementById('decrement');

INCREMENT.addEventListener("click",
    function increment(){
        if(currentNumber <= 9){
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML = currentNumber;   
        }
        color(currentNumber);
    }
)

DECREMENT.addEventListener("click",
    function decrement(){
        if(currentNumber >= -9){
            currentNumber = currentNumber - 1;
            currentNumberWrapper.innerHTML = currentNumber;
        }
        color(currentNumber);
    }
)
function color(currentNumber){
    var color = document.getElementById('currentNumber');
    if(currentNumber < 0){
        color.style.color = 'red';
    }else if (currentNumber == 0){
        color.style.color = 'black';
    }else if (currentNumber > 0){
        color.style.color = 'green';
    }
}