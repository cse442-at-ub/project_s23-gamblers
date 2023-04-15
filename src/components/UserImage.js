import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserImage.css"
import defaut_user_image from '../image/icon/unnamed.jpg'
import {useState, useEffect} from 'react'
import axios from 'axios'
function UserImage(){
    const [user_img, setUser_img] = useState()
    function fetchUserHandler() {
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/userinfo.php`,{ withCredentials: true }).then(function (response) {
            if (response.status === 200) {
                if(response.data.pf_image !== null){
                    setUser_img('https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/'+response.data.pf_image)
                }else{
                    setUser_img(defaut_user_image)
                }
            }
        })
    }
    useEffect(() => {
        fetchUserHandler()
    }, [])
    return (
        
        <div>
            <img
              alt=""
              src={user_img}
              className="user-image"
            />
        </div>
    )
}
export default UserImage