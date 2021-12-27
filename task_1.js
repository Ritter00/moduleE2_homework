// Задание 1
let value = prompt('Ведите число');
value = +value;

if(!value){
  console.log('Упс, кажется вы ошиблись');
} else if (typeof(value) === 'number'){
  let text = (value % 2 === 0)? 'Число чётное': 'Число нечётное';
  console.log(text);
}

