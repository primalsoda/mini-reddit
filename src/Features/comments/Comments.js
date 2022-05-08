import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, loadAllComments, commentsAreLoading } from "./commentsSlice";
import Comment from "../../Components/Comment";
import ROUTES from "../../App/ROUTES";
import { SubredditMiniBox } from "../../Components/SubredditMiniBox";

const Comments = () => {
    const default_thumbnail_img = 'https://media.istockphoto.com/photos/female-runner-running-at-summer-park-trail-healthy-fitness-woman-picture-id1172155958?k=20&m=1172155958&s=612x612&w=0&h=ZsO3xNOA0-Z_3VYAJ-BIXrx4v882vkonQg-u2r3Q8DA=';
    const default_profile_pic = 'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2';
    
    const dispatch = useDispatch();
    const allComments = useSelector(selectComments);
    const isLoading = useSelector(commentsAreLoading);
    
    useEffect(() => {
        dispatch(loadAllComments());
    }, [dispatch]); 

    if (isLoading) {
        return <section className="loading-comments-thread">Loading comments...</section>
    };

    return (
          <>
            <section className="comments-thread">
                {

                allComments.map((comment) => {
                    let checker = true;
                    if (comment.data.thumbnail.slice(0, 4) !== "http") {
                        checker = false;
                    };

                    return ( 
                    <Comment 
                    key={comment.data.id} 
                    id={comment.data.id} 
                    kind={comment.data.kind} 
                    name={comment.data.name} 
                    title={comment.data.title} 
                    profile_pic={checker ? comment.data.thumbnail : default_profile_pic}
                    thumbnail_image={checker ? comment.data.thumbnail : default_thumbnail_img}
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
                }
                )
                
                }
            </section>
            <section className="subreddit-sidebar">
                {

                    allComments.map((comment, index) => {
                        let checker = true;
                        if (comment.data.thumbnail.slice(0, 4) !== "http") {
                            checker = false;
                        };

                        return ( 
                        <SubredditMiniBox 
                        key={comment.data.id}
                        index={index} 
                        subreddit_pic={checker ? comment.data.thumbnail : default_profile_pic}                
                        score={comment.data.score}
                        subreddit={comment.data.subreddit}
                        subscribers={comment.data.subreddit_subscribers}
                        />)
                    }
                    )

                    } 
        </section>
          </>
    );
};

export default Comments;