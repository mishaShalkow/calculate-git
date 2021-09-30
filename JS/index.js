let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    decimall = document.getElementById('decimall'),
    result = document.getElementById('result');

for (let i = 0; i<numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e){
        console.log('Клик по кнопке при выборе');
    });
}