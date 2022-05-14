import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComment, selectCommentDiscussion, selectComment, commentIsLoading } from "./commentPageSlice";
import { useParams } from "react-router-dom";
//import ROUTES from "../../App/ROUTES";
import DiscussionCard from "./DiscussionCard";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadSubreddit } from "../subreddit/subredditSlice";


export const CommentPage = () => {
    const dispatch = useDispatch();
    const commentData = useSelector(selectComment);
    const commentDiscussionData = useSelector(selectCommentDiscussion);
    const isLoading = useSelector(commentIsLoading);
    let { subreddit, id, title } = useParams();
    const subreddit_url = `/r/${subreddit}`;

    //const default_thumbnail_img = 'https://media.istockphoto.com/photos/female-runner-running-at-summer-park-trail-healthy-fitness-woman-picture-id1172155958?k=20&m=1172155958&s=612x612&w=0&h=ZsO3xNOA0-Z_3VYAJ-BIXrx4v882vkonQg-u2r3Q8DA=';
    const default_profile_pic = 'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2';

    useEffect(() => {
        dispatch(loadComment({subreddit: subreddit, id: id, title: title}));
    }, [dispatch, subreddit, id, title]);

    if (isLoading) {
        return <div className="load-comment">Loading data...</div>
    };

    let discussionArr = [];
    commentDiscussionData.forEach((item) => {
        if (item.kind === "t1" && item.data.author !== 'AutoModerator') {
            discussionArr.push(item);
            return;
        };
      });

    const ups = parseFloat(commentData.ups/1000).toFixed(1);

    return (
        <section className="comment-page-thread">
            <div className="breadcrumbs">
                <Link to="/"><button className="bc-item"><FontAwesomeIcon icon={faHouse} /> Home</button></Link>
                <p>/</p>
                <Link to={subreddit_url} onClick={(e) => dispatch(loadSubreddit(subreddit))}><button className="bc-item">{subreddit}</button></Link>
                <p>/</p>
                <button className="bc-item">{commentData.id}</button>
            </div>
            <div className="main-card">
                <div className="main-card-left-column">
                    <p>{ups + 'K'}</p>
                    <p>{commentData.upvote_ratio * 100 + '%'}</p>
                </div>
                <div className="main-card-main-column">
                    <div className="main-card-top-section">
                        <img alt="profile-pic" className="profile-pic" src={commentData.thumbnail ? commentData.thumbnail : default_profile_pic} />
                        <Link to="/"><p>{commentData.subreddit_name_prefixed}</p></Link>
                    </div>
                    <div className="main-card-title">
                        <h1>{commentData.title}</h1>
                    </div> 
                </div>
            </div>
            <div className="discussion-thread">
                <h2>Discussions</h2>
                {discussionArr.map((entry, i) => <DiscussionCard key={i} username={entry.data.author} body={entry.data.body} />)}
            </div> 
        </section>
    )
};

