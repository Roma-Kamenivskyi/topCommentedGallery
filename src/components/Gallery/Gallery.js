import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from '../GalleryItem';
import Spinner from '../Spinner';

import './Gallery.css';

const sortComments = (items, minComments) => {
  const sortedItems = items
    .filter(item => item.data.num_comments >= minComments)
    .sort((a, b) => b.data.num_comments - a.data.num_comments);

  return sortedItems;
};

const Gallery = ({ loading, comments, minComments }) => {
  if (loading) {
    return <Spinner />;
  }

  const sortedComments = sortComments(comments, minComments);

  return (
    <ul className='gallery row'>
      {sortedComments.map(({ data }) => (
        <GalleryItem item={data} key={data.id} />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired,
  minComments: PropTypes.number
};

export default Gallery;
