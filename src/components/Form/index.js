import "./form.css"
import TextField from '../TextField';
import SuspendedList from "../SuspendedList";
import Button from "../Button/Button";
import { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [type, setType] = useState('')

    const save = (event) => {
        event.preventDefault();
        
        props.toPokemons({
            name,
            image,
            type
        });

        setName('')
        setImage('')
        setType('')
    }

    return (
        <section className="form-box">
            <form onSubmit={save}>
                <h2>Fill the form to create an pokemon card</h2>
                <TextField 
                    required = {true} 
                    label="Name" 
                    placeholder="type its name here"
                    value={name}
                    alterState={newValue => setName(newValue)} 
                />
                <TextField 
                    required = {true} 
                    label="Image" 
                    placeholder="inform the images URL here" 
                    value={image}
                    alterState={newValue => setImage(newValue)}
                />
                <SuspendedList
                    required = {true} 
                    label="Type" 
                    itens={props.type}
                    value={type}
                    alterState={newValue => setType(newValue)}
                />
                <Button>Submit pokemon</Button>
            </form>
        </section>
    )
}

export default Form;