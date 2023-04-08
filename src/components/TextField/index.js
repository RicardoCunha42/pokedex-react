import "./TextField.css"

const TextField = (props) => {
    
    const modifiedPlaceholder = `${props.placeholder}...`

    const typed = (event) => {
        props.alterState(event.target.value);
    }
    
    return (
        <div className="textField">
            <label>{props.label}</label>
            <input value={props.value} onChange={typed} required={props.required} placeholder={modifiedPlaceholder}/>
        </div>
    )
}

export default TextField;