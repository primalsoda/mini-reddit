import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faStar, faNewspaper, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { loadCommentsData } from "../Features/comments/_commentsSlice";
import { useDispatch } from "react-redux";
import ROUTES from "../App/ROUTES";
import { Link } from "react-router-dom";

const HomePageCategoryBox = () => {
    const dispatch = useDispatch();
    const best_url = ROUTES.reddit_url_json
    const hot_url = `${ROUTES.reddit_url}/hot/.json`;
    const new_url = `${ROUTES.reddit_url}/new/.json`;
    const top_url = `${ROUTES.reddit_url}/top/.json`;
    
    return (
        <div className="category-box">
            <button id="best-btn" onClick={(e) => dispatch(loadCommentsData(best_url))}><FontAwesomeIcon icon={faStar} />Best</button>
            <button id="hot-btn" onClick={(e) => dispatch(loadCommentsData(hot_url))}><FontAwesomeIcon icon={faFire} />Hot</button>
            <button id="new-btn" onClick={(e) => dispatch(loadCommentsData(new_url))}><FontAwesomeIcon icon={faNewspaper} />New</button>
            <button id="top-btn" onClick={(e) => dispatch(loadCommentsData(top_url))}><FontAwesomeIcon icon={faArrowUp} />Top</button>
        </div>
    );
};

export default HomePageCategoryBox;