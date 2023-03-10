import { Link } from "react-router-dom"
import './UserAgreement.css'

function UserAgreement(props) {
    return (props.trigger)?(
        <div className="popup">
            <div>
                <div className="popup-inner">
                    <Link to='/Register'>Back</Link>
                </div>
            </div>
        </div>
        ):'';
}
export default UserAgreement