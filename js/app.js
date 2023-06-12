//ввод данных
//x = prompt();
//x = document.getElementById("text").value;

//логика
//вызов функций app()
//x = x + 2

//вывод данных
//alert
//console.log
//document.getElementById("message1").innerText = message;

function app() {
    var message = document.getElementById("text").value
    document.getElementById("message1").innerText = message
    document.getElementById("text").value = ''
    //console.log(message)
}

function hello() {
    var age = parseInt(document.getElementById("age").value)
    var str = "Низяяя"
    
    if (age >= 18 && age < 100) {
        str = "Все можно"
    } 
 
    document.getElementById("result").innerText = str;
}

function calc() 
{
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var imt = weight/(height*height)*10000
    console.log(imt)
    if (imt <= 16) str = 'Выраженный дефицит'
    if (imt > 16 && imt < 18.5) str = 'Недостаточная масса тела'
    if (imt > 18.5 && imt < 24.99) str = 'Норма'

    document.getElementById("result").innerText = str;
}