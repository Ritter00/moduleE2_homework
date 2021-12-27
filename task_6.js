// Задание 6
let arrMas = ['y', 'y', 'y'];
let elem = true;
for (i = 1; i < arrMas.length; i++){
  if (arrMas[i-1] != arrMas[i]){
    elem = false;
  };
}
console.log(elem)

