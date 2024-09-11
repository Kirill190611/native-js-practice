//Task1: Без запуска кода проговорите что тут происходит и что будет в консоли (+)

/*const a = {};
const b = {};
const c = a;
const d = c;

console.log(a === b); // false
console.log(a === c); // true
console.log(c === d); //true
console.log(a === c); // true*/

//Task2: Что будет в консоль логах?. Будет ли мутирован объект "а"? (+)

/*
const a = {}
const b = a;
b['test'] = 'test value';

console.log(b === a) // true;
console.log(a) // {test: 'test value'}
*/

//Task3: У вас есть объект пользователя с информацией о его имени и адресе. Обновите значение города в адресе пользователя(сделайте это иммутабельно, используя spread оператор) (+)
//
// Исходный объект и ожидаемый результат:
/*const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const updatedUser = {...user, address: {...user.address, city: 'Toronto'}}

console.log(updatedUser);
console.log(user);

// Ожидаемый вывод: { name: 'John', address: { city: 'Toronto', country: 'USA' } }
*/

//Task4: У вас есть массив и новый элемент, который вы хотите добавить в конец этого массива. Напишите функцию addElementToArray, которая принимает исходный массив и новый элемент, и возвращает новый массив, в котором новый элемент добавлен в конец(используйте spread опретаор для решения) (+)

/*
const originalArray = [1, 2, 3, 4, 5];

const addElementToArray = (arr, num) => [...arr, num]

const newArray = addElementToArray(originalArray, 6);

console.log(newArray);
// Ожидаемый вывод: [1, 2, 3, 4, 5, 6]*/

//Task5: Извлечь значения свойств объекта в переменные name, age, city (+)

/*const user = { name: 'John', age: 25, city: 'New York' };

const {name, age, city} = user

console.log(name);  // 'John'
console.log(age);   // 25
console.log(city);  // 'New York'*/

//Task6: Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить (+)

/*
const fruits = ['apple', 'banana', 'orange'];

const [, secondFruit, thirdFruit] = fruits

console.log(secondFruit);  // 'banana'
console.log(thirdFruit);   // 'orange'*/

//Task7: Использовать деструктуризацию в параметрах функции (+)
/*
const person = { name: 'Alice', age: 30 };

// Деструктуризация в параметрах функции
function printPersonDetails({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person);  // Вывод: Name: Alice, Age: 30*/

//Task8: Установите значение по умолчанию для свойства year которого нет в объекте car (+)

/*const car = { brand: 'Toyota', model: 'Camry' };

const {brand, model, year = 2022} = car

console.log(brand);  // 'Toyota'
console.log(model);  // 'Camry'
console.log(year);   // 2022 (значение по умолчанию)*/

//Task9: Извлечь значения из массива объектов и вывести их в консоль (+)

/*const students = [
    { name: 'Alex', grade: 'A' },
    { name: 'Emma', grade: 'B' },
    { name: 'Chris', grade: 'C' },
];

const [{name: student1}, , {name: student3}] = students

console.log(student1);  // 'Alex'
console.log(student3);  // 'Chris'*/

//Task10 (+)

const person = { firstName: 'Max', lastName: 'Johnson' };

const firstName = 'first Name: Nina';
const lastName = 'last Name: Ivanov';

const { firstName: nameVariable, lastName: lastNameVariable, age = 25 } = person;

console.log(nameVariable); // 'Max'
console.log(lastNameVariable); // 'Johnson'
console.log(age); // 25 (значение по умолчанию)





