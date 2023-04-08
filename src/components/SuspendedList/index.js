import "./suspendedList.css"

const SuspendedList = (props) => {
    const selected = (event) => {
        props.alterState(event.target.value);
    }

    return(
        <div className="suspendedList">
            <label>{props.label}</label>
            <select onChange={selected} value={props.value} required={props.required}>
                <option value={''}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SuspendedList;