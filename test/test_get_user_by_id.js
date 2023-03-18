const axios = require('axios');
// make sure have such user?

axios.get('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/user/1')
  .then(response => {
    if(response.data.id !== 1){
        console.log("test_get_user_by_id: fail");
    }else if(response.data.username !== "admin"){
        console.log("test_get_user_by_id: fail");
    }else{
        console.log("test_get_user_by_id: pass");
    }
})
  .catch(error => {
    console.log(error);
  });
