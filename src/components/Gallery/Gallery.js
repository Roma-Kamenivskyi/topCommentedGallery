import React from "react";
import "./Gallery.css";
import GalleryItem from "../GalleryItem";

const compareComments = (a, b) => {
  if (a.data.num_comments > b.data.num_comments) {
    return -1;
  }
  if (a.data.num_comments < b.data.num_comments) {
    return 1;
  }
  return 0;
};

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

  const sortedElems = comments.sort(compareComments);
  const elements = sortedElems.map(item => {
    const {
      data,
      data: { id, thumbnail }
    } = item;

    const isIncludesThumbnail = thumbnail
      .toString()
      .includes("thumbs.redditmedia.com/");

    if (isIncludesThumbnail) {
      return <GalleryItem item={data} key={id} />;
    } else {
      return;
    }
  });
  return <ul className="gallery row">{elements}</ul>;
};

export default Gallery;
