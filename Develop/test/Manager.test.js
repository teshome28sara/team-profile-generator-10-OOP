const Manager = require("../lib/Manager");

// // // creating manager object  
test('creates a Manager object', () => {
    const manager = new Manager('Sara', 7, 'tes28sar@gmail', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

