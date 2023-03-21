import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheSearch } from "../utils/searchSlice";
import { Link } from "react-router-dom";
import { generateRandomPics } from "../utils/helper";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);

    //update Cache
    dispatch(
      cacheSearch({
        [searchQuery]: jsonData[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 mr-2 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAADc3NyUlJT7+/s6Ojru7u5LS0uenp4lJSX39/fh4eFvb28ICAhTU1Otra3o6OjCwsK8vLw1NTWEhITR0dHKyspqampERESNjY0WFhanp6ciIiLxq9OpAAABpElEQVR4nO3dWVLjUAwF0NdxYzskJIxmCPtfJxgSSPPVP0JV8jkruKrYz5YrKrUGAAAAAAAAAPDL+mnsahmn/qy+zfZPRdvNqcBDdpQwh88Cu+wcgbq5wJvsFKFu3itcZ4cItW7tNjtDsNtW8xj9ti1+kc6XaXaCcO0qO0Gwq3aXHSHYXbvPjhDsvj1kRwj20NouO0Oo3dxYZIcI9dFeTNkpAk2fzcWq6lN/vfpqgfdDdpgAw/6fzxjXq2quAz72AAAAAAAAAAAAAP/vby0/quv3j8NFLcPj/myItOoEYnes7/IpO0mYp8uP+6/iP6BPhvl+fM5OEer5/ZDJzhCsb2N2hGBj8aGgeSzoJTtCsJcFzJDW/w3r34f1z9L6z8P67zQLeC+t31ssoD9cQo+/gO80AAAAAAAAAAAAwO+qvt+i+o6S1Wt2mCCvxz0z5XcF1d/3VHssaNcWsHet/u68+vsP6++wzE4QbgG7ZOvvA66/07n4ZbpuS9itXnb6cHacQDxk5whzODWIm5oH6nZz1uT309jVMk4/R0gBAAAAAAAAAMK9AX/vTEiQhKHCAAAAAElFTkSuQmCC"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-6 mx-2"
            alt="youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            <Link to={"/search?q=" + searchQuery}>
            🔍
            </Link>
          </button>
        </div>
        <div>
          {showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {!suggestions? null : suggestions.map((s) => {
                  
                  const par = s.split(" ").join("+");
                  console.log(s+"   "+par);
                  return (
                  <Link key={s} to={"/search?q=" + par}>
                    {console.log("/search?q=" + par)}
                    <li className="py-2 px-3 shadow-sm hover:bg-gray-100">
                      🔍 {s}
                    </li>
                  </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1">
        <img
          alt="user"
          className="h-8"
          // src="data:image/jpeg;base64,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"
          src={generateRandomPics()}
        />
      </div>
    </div>
  );
};

export default Head;
