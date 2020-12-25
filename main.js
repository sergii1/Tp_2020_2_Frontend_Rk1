/**
 * Вывод чисел в колонках
 * @param   {Number}  max    от 0 до max
 * @param   {Number}  cols   количество колонок
 * @returns {String}
 */
let printNumbers = function (max, cols) {
    if(!Number.isInteger(max) || !Number.isInteger(cols)){
        throw new TypeError('Некорректный тип аргументов');
    }
    if(max<1 || cols<1){
        throw new Error('Некорректное значение аргументов');
    }
    let diff = Math.ceil(max / cols);//разница между соседними элементами в одной строке (пример ниже)
    let res = '';
    let i = 0;//номер строки
    let j = 0;//номер столбца
    for (let k = 0; k < max; k++) {
        let el = j + i * diff;
        res += el + ' ';
        if ((k + 1) % cols === 0) {
            j++;
            i = -1;
            res += '\n';
        }
        i++;
    }
    return res;
};


console.log(printNumbers(1, 1));
/*
Пример 1
cols = 3;
max = 5;
diff = Math.ceil(5/3) = 2,
2 - 0 = 4 - 2 = 2;
3 - 1 = 2;
Результат:
0 2 4
1 3

Пример 2
cols = 3;
max = 12;
diff = Math.ceil(12/4)4, 8-4 = 4-0 = 4;
Результат
0 4 8
1 5 9
2 6 10
3 7 11
*/

