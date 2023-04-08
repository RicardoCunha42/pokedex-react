import "./Button.css";

const Button = (props) => {
    return (
        <button className="submitButton">
            {props.children}
        </button>
    );
}

export default Button;