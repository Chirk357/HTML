// 1. Создать страницу, которая спрашивает имя у пользователя и 
// выводит приветствие его с помощью функции. Нарпимер "Привет Вася". 
// Можно через promt а можно и прямо на страницу.


let x = prompt('Введите имя');
alert(`Привет, ${x}`);

// 2* Сделайте страницу с чатом, чтобы сообщение выводилось и в консоль. 
// И добавьте поле с вводом имени пользователя и вывод имени рядом с сообщением.

function firstName()
{
    var x = document.getElementById('text').value; //Позволяет считать то, что пользователь ввел
    console.log(x); // вывести х в консоль в браузере
    document.getElementById('message1').innerText = x; //берем элемент message1 и в него записываем значение
}