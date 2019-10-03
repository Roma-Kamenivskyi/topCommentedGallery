import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ item }) => {
  const { title, thumbnail, num_comments, permalink } = item;
  return (
    <div className="gallery-item">
      <img src={thumbnail} />
      <h4> {title} </h4>
      <p>Number of comments: {num_comments} </p>
      <a href={`https://www.reddit.com${permalink}`} target="_blank">
        Link
      </a>
    </div>
  );
};

export default GalleryItem;
