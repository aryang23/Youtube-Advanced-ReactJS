import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";
import { get_YOUTUBE_SEARCH_URL } from "../utils/constants";
import SearchPageShimmer from "./SearchPageShimmer";

const SearchPage = () => {
  console.log("On Search Page");
  const [searchData, setSearchData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log("In use Effect");
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllData = async () => {
    const url = get_YOUTUBE_SEARCH_URL(searchParams);
    console.log(url);
    const data = await fetch(url);
    console.log(data);
    const jsonData = await data.json();
    console.log(jsonData);
    setSearchData(jsonData.items);
  };
  return (
    <>
      <div className="flex flex-wrap ml-20 mt-5">
        <ul className="">
          <li className="flex gap-2  hover:bg-gray-300 cursor-pointer h-10 w-20 rounded-lg pt-1.5 p-1">
            <img
              className="w-6 h-6"
              alt="user"
              src="https://cdn-icons-png.flaticon.com/512/6488/6488674.png"
            />
            <span>Filters</span>
          </li>
          <li className="text-gray-200">
            ....................................................................................................................................................................................................................................................................
          </li>
        </ul>
        {!searchData
          ? <SearchPageShimmer/>
          : searchData.map((search, index) => (
              <SearchCard key={index} data={search} />
            ))}
      </div>
    </>
  );
};

export default SearchPage;
