const Intern = require("../lib/Intern");

test('name', () => {
    const name = "Eric" 
    const e = new Intern(name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Intern("Eric", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Eric@email.com";
    const e = new Intern("Eric", 1, email)
    expect(e.email).toBe(email)
});

 test('getRole()', () =>{
     const role = 'Intern'
     const e = new Intern('Rob', 1, 'Eric@email.com', 'Intern')
     expect(e.getRole()).toBe(role)
 });

 test('getSchool', () =>{
     const schoolName = 'DU'
     const e = new Intern('Eric', 1, 'Eric@email.com', schoolName)
     expect(e.getSchool()).toBe(schoolName)
 });