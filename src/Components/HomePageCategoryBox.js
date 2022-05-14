import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar, faNewspaper, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { loadCommentsData } from "../Features/comments/commentsSlice";
import { useDispatch } from "react-redux";
import ROUTES from "../App/ROUTES";
import { NavLink } from "react-router-dom";


const HomePageCategoryBox = () => {
    const dispatch = useDispatch();
    const best_url = ROUTES.reddit_url_json
    const hot_url = `${ROUTES.reddit_url}/hot/.json`;
    const new_url = `${ROUTES.reddit_url}/new/.json`;
    const top_url = `${ROUTES.reddit_url}/top/.json`;
    
    return (
        <div className="category-box">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={(e) => dispatch(loadCommentsData(best_url))}>
                <FontAwesomeIcon icon={faStar} />
                <p>Best</p>
            </NavLink>
            <NavLink to="/hot" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={(e) => dispatch(loadCommentsData(hot_url))}>
                <FontAwesomeIcon icon={faFire} />
                <p>Hot</p>
            </NavLink>
            <NavLink to="/new" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={(e) => dispatch(loadCommentsData(new_url))}>
                <FontAwesomeIcon icon={faNewspaper} />
                <p>New</p>
            </NavLink>
            <NavLink to="/top" className={({ isActive }) => (isActive ? 'active' : 'inactive')} onClick={(e) => dispatch(loadCommentsData(top_url))}>
                <FontAwesomeIcon icon={faArrowUp} />
                <p>Top</p>
            </NavLink>
        </div>
    );
};

export default HomePageCategoryBox;