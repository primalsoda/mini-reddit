import React from "react";
import Comment from "../../Components/Comment";
import ROUTES from "../../App/ROUTES";

const Comments = ({allData}) => {
    const default_thumbnail_img = 'https://media.istockphoto.com/photos/female-runner-running-at-summer-park-trail-healthy-fitness-woman-picture-id1172155958?k=20&m=1172155958&s=612x612&w=0&h=ZsO3xNOA0-Z_3VYAJ-BIXrx4v882vkonQg-u2r3Q8DA=';
    const default_profile_pic = 'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2';

    return (
        <section className="comments-thread">
            {
                allData.map((arrItem) => {
                    let checker = true;
                    if (arrItem.data.thumbnail.slice(0, 4) !== "http") {
                        checker = false;
                    };

                    return (
                        <Comment 
                        key={arrItem.data.id} 
                        id={arrItem.data.id} 
                        kind={arrItem.data.kind} 
                        name={arrItem.data.name} 
                        title={arrItem.data.title} 
                        profile_pic={checker ? arrItem.data.thumbnail : default_profile_pic}
                        thumbnail_image={checker ? arrItem.data.thumbnail : default_thumbnail_img}
                        thumbnail_video={arrItem.data.media === !null ? arrItem.data.media.reddit_video.scrubber_media_url : null}                 
                        author={arrItem.data.author} 
                        date_created={arrItem.data.created}
                        ups={arrItem.data.ups} 
                        downs={arrItem.data.downs}
                        score={arrItem.data.score}
                        subreddit={arrItem.data.subreddit}
                        subreddit_id={arrItem.data.subreddit_id}
                        subreddit_name_prefixed={arrItem.data.subreddit_name_prefixed}
                        permalink={arrItem.data.permalink}
                        website_url={ROUTES.website_url}
                        />
                    );
                })
            }
        </section>
    );
};

export default Comments;