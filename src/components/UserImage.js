import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserImage.css"
import defaut_user_image from '../image/icon/unnamed.jpg'
function UserImage(){
    return (
        
        <div>
            <img
              alt=""
              src={defaut_user_image}
              className="user-image"
            />
        </div>
    )
}
export default UserImage