"use client"
import { useEffect, useState } from "react";

const InstagramVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,permalink&access_token=YOUR_ACCESS_TOKEN`
    )
      .then((response) => response.json())
      .then((data) => {
        const videoPosts = data.data.filter(post => post.media_type === "VIDEO");
        setVideos(videoPosts);
      })
      .catch(error => console.error("Error fetching Instagram videos:", error));
  }, []);

  return (
    <div>
      {videos.map((video) => (
        <div key={video.id}>
          <iframe
            width="100%"
            height="400px"
            src={video.media_url}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <p>{video.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramVideos;
