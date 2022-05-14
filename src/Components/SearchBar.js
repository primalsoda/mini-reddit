import React, {useState} from "react";
import { loadSubreddit } from "../Features/subreddit/subredditSlice";
import { useDispatch } from "react-redux";
//import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import ROUTES from "../App/ROUTES";

export const SearchBar = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.includes(" ")) {
            let combined_input = input.replace(/ /g, "");
            dispatch(loadSubreddit(combined_input));
            navigate(`/r/${combined_input}`);
            setInput('');
            return;
        } else {
            dispatch(loadSubreddit(input));
            navigate(`/r/${input}`);
            setInput('');
            return;
        };
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            className='search-bar'
            placeholder="Search..."
            value={input} 
            onChange={handleChange}
            type="search">
            </input>
        </form>
        

    )
};