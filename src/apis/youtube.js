import axios from "axios"

const KEY = "AIzaSyC2lvFg6Py7nc6rG8PhUATwdYQv_u6MsMw"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
})