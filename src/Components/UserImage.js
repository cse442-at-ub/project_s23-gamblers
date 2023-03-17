import 'bootstrap/dist/css/bootstrap.min.css';
import "./UserImage.css";
function UserImage(){
    return (
        
        <div>
            <img
              alt=""
              src="https://picsum.photos/200/300"
              width="100"
              height="100"
              className="user-image"
            />
        </div>
    )
}
export default UserImage