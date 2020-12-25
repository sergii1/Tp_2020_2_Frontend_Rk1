'use strict';

QUnit.module('Тестируем функцию printNumbers', function () {
    QUnit.test('Вывод чисел от 0 до 5 в 3 колонках', function (assert) {
        assert.strictEqual(printNumbers(5, 3), "0 2 4 \n1 3 " , '"0 2 4 \n1 3 " === "0 2 4 \n1 3 "');
    });

    QUnit.test('Вывод чисел от 0 до 12 в 3 колонках', function (assert) {
        assert.strictEqual(printNumbers(12, 3), "0 4 8 \n1 5 9 \n2 6 10 \n3 7 11 \n" , '"0 4 8\n1 5 9\n2 6 10\n3 7 11" \n===\n "0 4 8 \n1 5 9 \n2 6 10 \n3 7 11 \n"');
    });

    QUnit.test('На входе некорректные аргументы', function (assert) {
        assert.throws(() => printNumbers('str', 'str'),
            TypeError('Некорректный тип аргументов'),
            'Некорректный тип аргументов');
        assert.throws(() => printNumbers(-1, -1),
            Error('Некорректное значение аргументов'),
            'Некорректное значение аргументов');
    });


});