import "./PopUp.css"

function PopUpWindow(props){
    return (props.trigger) ? (
        <div>
                {props.children}
        </div>    
    ) : "";
}
export default PopUpWindow