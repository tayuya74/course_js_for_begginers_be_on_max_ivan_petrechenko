//Заменить картинку заднего фона на другую из папки img
let bodyImg = document.body;
bodyImg.style.background = 'url(./img/apple_true.jpg) center no-repeat';

//Восстановить порядок в меню, добавить пятый пункт
let menu = document.querySelector('.menu')
let menu3 = document.querySelector('.menu-item:nth-child(2)')
let menu2 = document.querySelector('.menu-item:nth-child(3)')
let menu5 = document.createElement('li')
menu5.classList.add('menu-item')
menu5.innerHTML = 'Пятый пункт'
menu.insertBefore(menu2, menu3)
menu.append(menu5)

//Удалить рекламу со страницы
document.querySelector('.adv').remove()

// - Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем
// только подлинную технику Apple")
document.getElementById('title').textContent = 'Мы продаем только подлинную технику Apple'

// Спросить у пользователя отношение к технике
// apple и записать ответ в блок на странице с id "prompt"
let promptQ = document.getElementById('prompt');
let promptAns = prompt('Как вы относитесь к технике Apple?', '');
promptQ.textContent = promptAns
console.log(promptQ)