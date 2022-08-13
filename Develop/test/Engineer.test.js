const Engineer = require("../lib/Engineer");
// // creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Sara', 7, 'tes28sar@gmail', 'teshome28sara');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// // gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Sara', 7, 'tes28sar@gmail', 'teshome28sara');

    expect(engineer.github) .toEqual(expect.any(String));
});

// // gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Sara', 7, 'tes28sar@gmail','teshome28sara');

    expect(engineer.getRole()).toEqual("Engineer");
});

