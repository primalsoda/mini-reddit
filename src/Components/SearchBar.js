import React, {useState} from "react";

export const SearchBar = () => {
    const [input, setInput] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        //ADD MORE LATER
        setInput('');
    }

    return (
        <form handleSumbit={handleSubmit}>
            <input 
            className='search-bar'
            placeholder="Search..."
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            type="search">
            </input>
        </form>

    )
};