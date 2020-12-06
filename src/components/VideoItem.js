import React from "react"
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect }) => {

  const onVideoClick = () => {
    onVideoSelect(video)
  }

  return (
    <div onClick={onVideoClick} className="item video-item">
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem

