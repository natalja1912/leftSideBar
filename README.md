# Тестовое задание Frontend (Junior)
# Задания 1, 4
SideBar Menu
Cтраница с боковым меню и отображением элементов при переключении чек-боксов

## Технологии
 * React
 * Flexbox
 * Font Awesome icons

## Ссылка на сайт github pages

# Задание 2
Функция сдвига элементов массива вправо на N шагов
const arr = [1, 2, 3, 4, 5];
const k = 3;
function shiftArrayElements(arr, k) {
return arr.slice(k - 1).concat(arr.slice(0, k - 1));
}
console.log(shiftArrayElements(arr, k));

# Задание 3
Найти самую длинную общую последовательность 2х строк.
const stringA = "aababba";
const stringB = "abbaabcd";

let result = "";

// сдвиг строки вправо на 1 букву
function shiftString(string) {
return string.slice(1);
}

// определение самой длительной общей последовательности
// между массивом из stringA(0, ...stringA.length) строк и строки stringB
function findCommon(stringA, stringB) {
let i = stringA.length;
while (i > 0) {
let currString = stringA.slice(0, i);
if (stringB.includes(currString) && currString.length > result.length) {
result = currString;
}
i--;
}
if (stringA.length > 0) {
const newString = shiftString(stringA);
findCommon(newString, stringB);
}
return result;
}

console.log(findCommon(stringA, stringB));


