// Задание 7
let arrayN = [4, 1, 2, 6, 8, 9, 7, null, 5, NaN, '7', '+', 0 , 0, 'kl', 0, 8, 13];
let evenNumb = 0;
let oddNumb = 0;
let nullNumb = 0;

arrayN.forEach(function(item, index, array) {
  if(typeof(item) === 'number'){
    if (item === 0 ){
      nullNumb += 1
    } else if (+item){
      numb = item % 2;
      if (numb ===0){
        evenNumb += 1;
      } else {
        oddNumb += 1;
      }
    }
  }
});

               
console.log('Четных чисел: ' + evenNumb + ', Нечетных чисел: ' + oddNumb + 
            ', Количество нулей: ' + nullNumb)
