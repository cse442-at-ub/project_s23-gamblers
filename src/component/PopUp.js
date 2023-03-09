import "./PopUp.css"

function PopUp(props){
    return (props.trigger) ? (
        <div>
                {props.children}
        </div>    
    ) : "";
}
export default PopUp