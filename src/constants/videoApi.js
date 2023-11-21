export const videoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&pageToken=`;



