const axios = require('axios');
process.stdout.write("test_save_user: ");
axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/register')
  .then(response => {
    let result = 'You are using GET, you should use POST'
    if(response.data !== result){
        console.log("fail");
        return;
    }
  })
  .catch(error => {
    console.log(error);
  });
let all_not_null = {"email":"justfortest@exchange.com","username":"test_save_user","hash":"999","phoneNumber":"123456"}
let email_empty = {"email":"","username":"test_save_user","hash":"999","phoneNumber":"123456"}
let username_empty = {"email":"justfortest@exchange.com","username":"","hash":"999","phoneNumber":"123456"}
let hash_empty = {"email":"justfortest@exchange.com","username":"test_save_user","hash":"","phoneNumber":"123456"}
let phone_emtpy = {"email":"justfortest@exchange.com","username":"test_save_user","hash":"999","phoneNumber":""}
let empty = [email_empty,username_empty,hash_empty,phone_emtpy];

for (const i of empty){
    let result = "one of you information is empty";
    axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/register/',i)
    .then(response =>{
        if(response.data !== result){
            console.log("fail",response.data);
            return;
        }
    })
}
// axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/user/1')
//   .then(response => {

//     if(JSON.stringify(response.data) === result){
//         console.log("test_get_user_by_id: pass");
//     }else{
//         console.log("test_get_user_by_id: fail");
//     }
//   })
//   .catch(error => {
//     console.log(error);
//   });

  console.log("pass");
