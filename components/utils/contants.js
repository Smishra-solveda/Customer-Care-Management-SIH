const GOOGLE_API_KEY = 
// "AIzaSyAtIibgU4boIyzkgbabBCe8BJJsBSfNlWA";
"AIzaSyB0CIkSPCXMzusM-Bn93iGJVWZdOb9y7yo"

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination