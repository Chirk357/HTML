// 2* Сделайте страницу с чатом, чтобы сообщение выводилось и в консоль. 
// И добавьте поле с вводом имени пользователя и вывод имени рядом с сообщением.

function Name()
{
    var x = document.getElementById("name").value; 
    var y = document.getElementById("message").value; 
    console.log(x, y); 
    document.getElementById("result1").innerText = x; 
    document.getElementById("result2").innerText = y;
    
}