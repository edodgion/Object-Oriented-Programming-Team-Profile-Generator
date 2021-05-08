const Engineer = require("../lib/Engineer");

test('getGitHub()',() => {
    const id = 1
    const e = new Engineer('Eric', id, 'Eric@email.com', 'edodgion')
    expect(e.getId()).toBe(id);
 });
 
 test('getGitHub()',() => {
    const user = 'edodgion'
    const e = new Engineer('Eric', 1, 'Eric@email.com', user)
    expect(e.getGitHub()).toBe(user);
 });

 test('getRole()', () =>{
     const testRole = 'Engineer'
     const e = new Engineer('Eric', 1, 'Eric@email.com', 'Engineer')
     expect(e.getRole()).toBe(testRole)
 });

 test('Get the githubname through getHub', () =>{
     const userName = 'Eric@email.com'
     const e = new Engineer('Eric', 1, userName, 'edodgion')
     expect(e.getEmail()).toBe(userName)
 });