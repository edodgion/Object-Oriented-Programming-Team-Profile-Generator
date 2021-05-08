const Engineer = require("../lib/Engineer");

test('name', () => {
    const name = "Eric" 
    const e = new Engineer(name)
    expect(e.name).toBe(name)
});

test('id', () => {
    const id = 1;
    const e = new Engineer("Eric", id)
    expect(e.id).toBe(id)
});

test('email', () => {
    const email = "Eric@email.com";
    const e = new Engineer("Eric", 1, email)
    expect(e.email).toBe(email)
});

 test('github',() => {
    const user = 'edodgion'
    const e = new Engineer('Eric', 1, 'Eric@email.com', user)
    expect(e.github).toBe(user);
 });

 test('getGitHub()', () =>{
    const gitHub = 'www.github.com/edodgion'
    const e = new Engineer('Eric', 1, 'Eric@email.com', gitHub)
    expect(e.getGitHub()).toBe(gitHub);
});

 test('getRole()', () =>{
     const role = 'Engineer'
     const e = new Engineer('Eric', 1, 'Eric@email.com', 'Engineer')
     expect(e.getRole()).toBe(role);
 });
