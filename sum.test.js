const expectExport = require('expect');
const sum = require('./sum');

test('add 1 + 2 to equal 3', () => {
    expectExport(sum(1, 2)).toBe(3);
})