const YOUTUBE_API_KEY = "AIzaSyDttmfrkpWzZyxlWMJHzKeYAoAL-xcofj8";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API = 
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export const get_YOUTUBE_SEARCH_URL = (searchParams) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParams}&key=${YOUTUBE_API_KEY}`;
    return URL;
}

