import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, loadAllComments, commentsAreLoading } from "./commentsSlice";
import Comment from "../../Components/Global/Comment";
import { website_url } from "../../App/App";

const Comments = () => {
    const dispatch = useDispatch();
    const allComments = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    
    useEffect(() => {
        dispatch(loadAllComments());
    }, [dispatch]); 

    if (isLoading) {
        return <section className="comments-thread">loading state</section>
    };

    return (
          <>
            <section className="comments-thread">
                {

                allComments.map((comment) => (
                <Comment 
                key={comment.data.id} 
                id={comment.data.id} 
                kind={comment.data.kind} 
                name={comment.data.name} 
                title={comment.data.title} 
                thumbnail={comment.data.thumbnail === !null ? comment.data.thumbnail : ""}
                small_video={comment.data.media === !null ? comment.data.media.reddit_video.scrubber_media_url : ""}                 
                author={comment.data.author} 
                date_created={comment.data.created}
                ups={comment.data.ups} 
                downs={comment.data.downs}
                score={comment.data.score}
                subreddit={comment.data.subreddit}
                subreddit_id={comment.data.subreddit_id}
                subreddit_name_prefixed={comment.data.subreddit_name_prefixed}
                permalink={comment.data.permalink}
                website_url={website_url}
                />)
                )
                
                }
            </section>
          </>
    );
};

export default Comments;