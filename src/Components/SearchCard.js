import { Link } from "react-router-dom";
import { generateRandomTime, generateRandomPics } from "../utils/helper";

const SearchCard = ({ data }) => {
  // console.log(data);
  const { channelTitle, description, publishedAt, thumbnails, title } =
    data.snippet;
  const { videoId } = data.id;
  const date = publishedAt.split("T")[0];
  return (
    <>
      <Link to={"/watch?v=" + videoId}>
        <div className="flex m-1 p-1">
          <img
            alt="thumbnail"
            className="rounded-lg"
            src={thumbnails.medium.url}
          />
          <ul className="ml-2">
            {/* <li className="flex-end justify-end">
              <span className="text-[18px] ml-auto">{title}</span>
              <button cursor-pointer className="h-10 w-20 ml-auto">I</button>
            </li> */}
            <li className="text-[18px]">{title}</li>
            <li className="mb-2 text-xs  text-gray-500">{generateRandomTime()}</li>
            <li className="text-xs flex text-gray-500">
              <img
                className="w-6 h-6"
                alt="user"
                // src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                src={generateRandomPics()}
              />
              <span className="text-center mt-1 ml-1">{channelTitle}</span>
            </li>
            <li className="mt-2 text-xs">{description}</li>
          </ul>
        </div>
      </Link>
    </>
  );
};

export default SearchCard;
