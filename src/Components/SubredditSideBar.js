import React from "react";
import { SubredditMiniBox } from "./SubredditMiniBox";

const SubredditSideBar = ({allData}) => {
    const default_thumbnail_img = 'https://media.istockphoto.com/photos/female-runner-running-at-summer-park-trail-healthy-fitness-woman-picture-id1172155958?k=20&m=1172155958&s=612x612&w=0&h=ZsO3xNOA0-Z_3VYAJ-BIXrx4v882vkonQg-u2r3Q8DA=';
    const default_profile_pic = 'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2';

    return (
        <div className="subreddit-sideBar">
            <h2>Featured Subreddits</h2>
            
            {
                allData.map((arrItem, index) => {
                    let checker = true;
                    if (arrItem.data.thumbnail.slice(0, 4) !== "http") {
                        checker = false;
                    };

                    return (
                        <SubredditMiniBox 
                        key={arrItem.data.id} 
                        index={index}
                        profile_pic={checker ? arrItem.data.thumbnail : default_profile_pic}
                        thumbnail_image={checker ? arrItem.data.thumbnail : default_thumbnail_img}
                        thumbnail_video={arrItem.data.media === !null ? arrItem.data.media.reddit_video.scrubber_media_url : null}                 
                        score={arrItem.data.score}
                        subscribers={arrItem.data.subreddit_subscribers}
                        subreddit={arrItem.data.subreddit}
                        permalink={arrItem.data.permalink}
                        />
                    );
                })
            }
        </div>
    );
};

export default SubredditSideBar;