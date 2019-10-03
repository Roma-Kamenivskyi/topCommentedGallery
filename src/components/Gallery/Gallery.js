import React from "react";
import "./Gallery.css";
import GalleryItem from "../GalleryItem";

const Gallery = ({ loading, comments }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const sortedElems = comments.sort(compare);
  const elements = sortedElems.map(item => {
    const {
      data,
      data: { id }
    } = item;
    return <GalleryItem item={data} key={id} />;
  });
  return <ul className="gallery row">{elements}</ul>;
};

function compare(a, b) {
  if (a.data.num_comments > b.data.num_comments) {
    return -1;
  }
  if (a.data.num_comments < b.data.num_comments) {
    return 1;
  }
  return 0;
}

export default Gallery;
