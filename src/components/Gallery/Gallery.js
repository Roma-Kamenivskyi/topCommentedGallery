import React from "react";
import "./Gallery.css";
import GalleryItem from "../GalleryItem";

const Gallery = ({ loading, comments }) => {
  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    console.log(comments);
    return (
      <ul className="gallery row">
        {comments.map(item => (
          <li className="col-md-4 mb-3" key={item.id}>
            <GalleryItem item={item.data} />
          </li>
        ))}
      </ul>
    );
  }
};

export default Gallery;
