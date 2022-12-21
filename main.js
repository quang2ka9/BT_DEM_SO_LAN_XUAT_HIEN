var countDisplay = function (_numbers, _value) {
    var counts = 0;
    var i = 0;
    while (i < _numbers.length) {
        if (_numbers[i] == _value) {
            counts++;
        }
        i++;
    }
    return counts;
};
console.log(countDisplay([1, 2, 3, 1, 2, 3, 5, 4, 1], 1));
