const Manager = require("../lib/Manager");

test('name', () => {
    const name = "Eric" 
    const e = new Manager(name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Manager("Eric", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Eric@email.com";
    const e = new Manager("Eric", 1, email)
    expect(e.email).toBe(email)
});

test('officeNumber', () =>{
    const officeNumber = 3035552244
    const e = new Manager('Eric', 1, 'Eric@email.com', officeNumber)
    expect(e.officeNumber).toBe(officeNumber);
});

test('getRole()', () =>{
    const role = 'Manager'
    const e = new Manager('Eric', 1, 'Eric@email.com', 'Manager')
    expect(e.getRole()).toBe(role);
});