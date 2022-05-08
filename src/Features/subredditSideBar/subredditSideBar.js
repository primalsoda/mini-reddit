import React, {useEffect} from "react";
import { SubredditMiniBox } from "../../Components/SubredditMiniBox";
import { useDispatch, useSelector } from "react-redux";
import { selectData, loadHomePageData, dataIsLoading } from "./subredditSideBarSlice";


const SubredditSideBar = () => {
    const dispatch = useDispatch();
    const allHomePageData = useSelector(selectData);
    const isLoading = useSelector(dataIsLoading);

    const default_subreddit_pic = 'https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2';
    
    useEffect(() => {
        dispatch(loadHomePageData());
    }, [dispatch]); 

    if (isLoading) {
        return 
    };

    return (
        <section className="subreddit-sidebar">
                {

                    allHomePageData.map((comment, index) => {
                        let checker = true;
                        if (comment.data.thumbnail.slice(0, 4) !== "http") {
                            checker = false;
                        };

                        return ( 
                        <SubredditMiniBox 
                        key={comment.data.id}
                        index={index} 
                        subreddit_pic={checker ? comment.data.thumbnail : default_subreddit_pic}                
                        score={comment.data.score}
                        subreddit={comment.data.subreddit}
                        subscribers={comment.data.subreddit_subscribers}
                        />)
                    }
                    )

                    } 
        </section>
    )
};

export default SubredditSideBar;
