const axios = require('axios');
// make sure have such user?
let faildata = {"username":"test","password":"testpwd1"} // object?
let rightdata = {"username":"test","password":"testpwd"} //object? should be string idk
axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/login/',faildata)
  .then(response => {
    
    if(response.data !== "success"){
        console.log("test_login: pass");
    }else{
        console.log("test_login: fail");
    }
  })
  .catch(error => {
    console.log(error);
  });

axios.post('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/login/',rightdata)
.then(response => {

if(response.data === "success"){
    console.log("test_login: pass");
}else{
    console.log("test_login: fail");
}
})
.catch(error => {
console.log(error);
});