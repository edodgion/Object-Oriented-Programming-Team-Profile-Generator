const Employee = require("../lib/Employee");

test('Employee', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
});

test('Employees name', () => {
    const name = "Eric" 
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test('Employee id', () => {
    const id = 1;
    const e = new Employee("Eric", id)
    expect(e.id).toBe(id)
});

test('Employee email', () => {
    const email = "Eric@email.com";
    const e = new Employee("Eric", 1, email)
    expect(e.email).toBe(email)
});
