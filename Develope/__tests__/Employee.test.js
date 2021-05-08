const Employee = require("../lib/Employee");

test('Employee', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
});

test('name', () => {
    const name = "Eric" 
    const e = new Employee(name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Employee("Eric", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Eric@email.com";
    const e = new Employee("Eric", 1, email)
    expect(e.email).toBe(email)
});


test('getName()', () => {
  const name = "Eric" 
  const e = new Employee(name)
  expect(e.getName()).toBe(name)
});

test('getId()', () => {
  const id = 1;
  const e = new Employee("Eric", id)
  expect(e.getId()).toBe(id)
});

test('getEmail()', () => {
  const email = "Eric@email.com";
  const e = new Employee("Eric", 1, email)
  expect(e.getEmail()).toBe(email)
});

test('getRole()', () => {
  const e = new Employee("Employee")
  expect(e.getRole()).toBe("Employee")
});

