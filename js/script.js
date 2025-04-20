let inputBill = document.querySelector('.bill__campo');
let buttonCustom = document.querySelector('.button__custom');
let buttonReset = document.querySelector('.reset');
let button5 = document.querySelector('.button__5');
let button10 = document.querySelector('.button__10');
let button15 = document.querySelector('.button__15');
let button25 = document.querySelector('.button__25');
let button50 = document.querySelector('.button__50');

button5.addEventListener('click', function() {
    button5.style.backgroundColor = '#9FE8DF';
    button5.style.color = '#00474B';
    button10.style.backgroundColor = '#00474B';
    button10.style.color = '#FFFFFF';
    button15.style.backgroundColor = '#00474B';
    button15.style.color = '#FFFFFF';
    button25.style.backgroundColor = '#00474B';
    button25.style.color = '#FFFFFF';
    button50.style.backgroundColor = '#00474B';
    button50.style.color = '#FFFFFF';
});

button10.addEventListener('click', function() {
    button5.style.backgroundColor = '#00474B';
    button5.style.color = '#FFFFFF';
    button10.style.backgroundColor = '#9FE8DF';
    button10.style.color = '#00474B';
    button15.style.backgroundColor = '#00474B';
    button15.style.color = '#FFFFFF';
    button25.style.backgroundColor = '#00474B';
    button25.style.color = '#FFFFFF';
    button50.style.backgroundColor = '#00474B';
    button50.style.color = '#FFFFFF';
});

button15.addEventListener('click', function() {
    button5.style.backgroundColor = '#00474B';
    button5.style.color = '#FFFFFF';
    button10.style.backgroundColor = '#00474B';
    button10.style.color = '#FFFFFF';
    button15.style.backgroundColor = '#9FE8DF';
    button15.style.color = '#00474B';
    button25.style.backgroundColor = '#00474B';
    button25.style.color = '#FFFFFF';
    button50.style.backgroundColor = '#00474B';
    button50.style.color = '#FFFFFF';
});

button25.addEventListener('click', function() {
    button5.style.backgroundColor = '#00474B';
    button5.style.color = '#FFFFFF';
    button10.style.backgroundColor = '#00474B';
    button10.style.color = '#FFFFFF';
    button15.style.backgroundColor = '#00474B';
    button15.style.color = '#FFFFFF';
    button25.style.backgroundColor = '#9FE8DF';
    button25.style.color = '#00474B';
    button50.style.backgroundColor = '#00474B';
    button50.style.color = '#FFFFFF';
});

button50.addEventListener('click', function() {
    button5.style.backgroundColor = '#00474B';
    button5.style.color = '#FFFFFF';
    button10.style.backgroundColor = '#00474B';
    button10.style.color = '#FFFFFF';
    button15.style.backgroundColor = '#00474B';
    button15.style.color = 'FFFFFFF';
    button25.style.backgroundColor = '#00474B';
    button25.style.color = '#FFFFFF';
    button50.style.backgroundColor = '#9FE8DF';
    button50.style.color = '#00474B';
});

buttonReset.addEventListener('click', function() {
    buttonReset.style.backgroundColor = '#9FE8DF';
});

buttonCustom.addEventListener('click', function() {
    console.log('Custom button clicked!');
    prompt('Enter a custom tip percentage: ', '0');

});


/*if (inputBill.value === '0' || inputBill.value === '') {
    inputBill.classList.add('error');
    alert('Please enter a valid bill amount.');
} else {
    inputBill.classList.add('sucess');
}*/