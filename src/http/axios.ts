import axios from "axios";

export const youtubeAPI = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'},
    params: {
      'key': process.env.YOUTUBE_DATA_API_KEY
    }
  });
  