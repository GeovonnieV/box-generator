import React, {useState} from "react";

const Input = ({ boxColors ,setBoxColors}) => {

    const [input, setInput] = useState("")

    const inputOnChange = (e) => {
        setInput(e.target.value)
    }

    const addInputToArray = (e) => {
        e.preventDefault();

        setBoxColors([input, ...boxColors])
    }

    return(
        <div className="container">
            <h2>Put in color for box</h2>
            <form onSubmit={addInputToArray}>
                <label>Color: </label>
                <input onChange={inputOnChange} />
                <button type="submit">Add Color</button>
            </form>
        </div>
    )
}

export default Input;