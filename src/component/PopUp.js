import 'bootstrap/dist/css/bootstrap.min.css';
import "./PopUp.css"

function PopUp(props){
    return (props.trigger) ? (
        <div>
                {props.children}
        </div>    
    ) : "";
}
export default PopUp