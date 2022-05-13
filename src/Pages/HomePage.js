import React from "react";
import HomePageCategoryBox from "../Components/HomePageCategoryBox";
import { Threads } from "../Components/Threads";

export const HomePage = () => {
    return (
        <div className="home-page">
          <Threads />
          <HomePageCategoryBox />
        </div>
    )
};
