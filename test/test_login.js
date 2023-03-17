const axios = require('axios');
let faildata = {"email":"justfortest@exchange.com","username":"22","password":"9299","phone":"123456"} // object?
let rightdata = {"email":"justfortest@exchange.com","username":"223","password":"999","phone":"123456"} //object? should be string idk
axios.post('http://localhost:8080/project_s23-gamblers/api/login/',faildata)
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

axios.post('http://localhost:8080/project_s23-gamblers/api/login/',rightdata)
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