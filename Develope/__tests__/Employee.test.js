const Employee = require("../lib/Employee");
test('create an employee', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
});
test('Can set name through constructor', () => {
    const name = "Eric" 
    const e = new Employee(name)
    expect(e.name).toBe(name)
});
test('Can set ie through constructor', () => {
    const id = 100;
    const e = new Employee("Eric", id)
    expect(e.id).toBe(id)
});
test('Can set emaie through constructor', () => {
    const email = "Eric@email.com";
    const e = new Employee("Eric", 1, email)
    expect(e.email).toBe(email)
});
test('Can we get name through getName()', () => {
    const name = "Eric";
    const e = new Employee(name)
    expect(e.getName()).toBe(name)
});
test('Can we get Ie through getID()', () => {
    const id = 1;
    const e = new Employee('Eric', id)
    expect(e.getId()).toBe(id)
});
test('Can we get Emaie through getEmail()', () => {
    const email = 'Eric@email.com'
    const e = new Employee('Eric', 1, email)
    expect(e.getEmail()).toBe(email)
});
test('Can we get Role through getRole()', () => {
    const role = 'Employee'
    const e = new Employee('Eric', 1, 'Eric@email.com',)
    expect(e.getRole()).toBe(role)
});




