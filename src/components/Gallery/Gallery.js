import React from "react";
import "./Gallery.css";
import GalleryItem from "../GalleryItem";
import PropTypes from "prop-types";

const compareComments = (a, b) => {
  if (a.data.num_comments > b.data.num_comments) {
    return -1;
  }
  if (a.data.num_comments < b.data.num_comments) {
    return 1;
  }
  return 0;
};
const getItemsByComments = (items, minComments) => {
  return items
    .filter(item => item.data.num_comments >= minComments)
    .sort(compareComments);
};

const Gallery = ({ loading, comments, minComments }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const itemsByComments = getItemsByComments(comments, minComments);
  const elements = itemsByComments.map(item => {
    const {
      data,
      data: { id, thumbnail }
    } = item;

    const isIncludesThumbnail = thumbnail.includes("thumbs.redditmedia.com/");
    if (isIncludesThumbnail) {
      return <GalleryItem item={data} key={id} />;
    } else {
      return false;
    }
  });
  return <ul className="gallery row">{elements}</ul>;
};

Gallery.propTypes = {
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired
};

export default Gallery;
