import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserImage.css"
import defaut_user_image from '../image/icon/unnamed.jpg'
import {useState, useEffect} from 'react'
import axios from 'axios'
function UserImage(){
    const [user_img, setUser_img] = useState(defaut_user_image)
    function fetchUserHandler() {
        axios.get(`https://localhost/api/userinfo.php`,{ withCredentials: true }).then(function (response) {
            if (response.status === 200) {
                console.log(response.data.pf_image)
                if(response.data.pf_image !== null){
                    setUser_img('https://localhost/'+response.data.pf_image)
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