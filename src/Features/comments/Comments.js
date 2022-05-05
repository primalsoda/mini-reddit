import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, loadAllComments, commentsAreLoading } from "./commentsSlice";
import Comment from "../../Components/HomePage/Comment";

const Comments = () => {
    const dispatch = useDispatch();
    const allComments = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    
    useEffect(() => {
        dispatch(loadAllComments());
    }, [dispatch, allComments]); 

    if (isLoading) {
        return <div>loading state</div>;
    };

    return (
          <section className="comments-thread">
            {

            allComments.map((comment) => (
            <Comment 
            key={comment.data.id} 
            id={comment.data.id} 
            kind={comment.data.kind} 
            name={comment.data.name} 
            title={comment.data.title} 
            imgUrl={comment.data.url} 
            authorName={comment.data.author} 
            dateCreated={comment.data.created}
            ups={comment.data.ups} 
            downs={comment.data.downs}
            score={comment.data.score}
            subreddit={comment.data.subreddit}
            subreddit_id={comment.data.subreddit_id}
            />))
            
            }
          </section>
    );
};

export default Comments;