import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, loadAllComments, commentsAreLoading } from "./commentsSlice";
import Comment from "../../Components/Global/Comment";
import ROUTES from "../../App/ROUTES";

const Comments = () => {
    const default_profile_pic = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2FiDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png%3Fwidth%3D720%26auto%3Dwebp%26s%3Dbe9d031a2551b47bcd40ec45feec636d42a32127&f=1&nofb=1';
    const default_thumbnail_img = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.organiclifestylemagazine.com%2Fwp-content%2Fuploads%2F2020%2F10%2FRunning-.png&f=1&nofb=1';
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
                profile_pic={comment.data.thumbnail === "self" ? default_profile_pic : comment.data.thumbnail}
                thumbnail_image={comment.data.thumbnail === "self" ? default_thumbnail_img : comment.data.thumbnail}
                thumbnail_video={comment.data.media === !null ? comment.data.media.reddit_video.scrubber_media_url : null}                 
                author={comment.data.author} 
                date_created={comment.data.created}
                ups={comment.data.ups} 
                downs={comment.data.downs}
                score={comment.data.score}
                subreddit={comment.data.subreddit}
                subreddit_id={comment.data.subreddit_id}
                subreddit_name_prefixed={comment.data.subreddit_name_prefixed}
                permalink={comment.data.permalink}
                website_url={ROUTES.website_url}
                />)
                )
                
                }
            </section>
          </>
    );
};

export default Comments;