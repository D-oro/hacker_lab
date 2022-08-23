import React from "react";
import Story from "./Story";

const LatestStories = ({news}) => {
    const newsItems = news.map((story, index) => {
        return <Story story={story} key = {index}/>
    })

    return (
        <div>
            <ul>
                {newsItems}
            </ul>
        </div>
    )
}
export default LatestStories;


