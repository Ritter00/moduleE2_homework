// Задание 8
let myMap = new Map ([
  [1, 'ty'],
  [false, 'true'],
  ['good', 'bad'],
  [null, NaN]
]);
for (let key of myMap.keys()){
  console.log(`Ключ - ${key}, значение -  ${myMap.get(key)}`);
}

