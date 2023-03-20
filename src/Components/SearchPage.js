import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchCard from "./SearchCard";

const SearchPage = () => {
  console.log("On Search Page");
  const [searchData, setSearchData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParams}&key=AIzaSyBhoSjF1OWuEyDdEVNfc0Exhc88efgxgKg`;
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
        <li className="flex gap-2">
        <img
          className="w-6 h-6"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/6488/6488674.png"
        />
        <span>Filters</span>
        </li>
        <li className="text-gray-200">
        -------------------------------------------------------------------------------------------------------------------------------------
        </li>
      </ul>
        {searchData.map((search, index) => (
          <SearchCard key={index} data={search} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
