const expectExport = require('expect');
const activate = require('./activate');

// Tests if turbo is activating
test('Activate turbo-heating', () => {
    const id = 'turbo'
    expectExport(activate(id)).toBe(true);
})