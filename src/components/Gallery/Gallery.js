import React from 'react';
import PropTypes from 'prop-types';

import GalleryItem from '../GalleryItem';
import Spinner from '../Spinner';

import './Gallery.css';

const getItemsByComments = (items, minComments) => {
  const sortedItems = items
    .filter(item => item.data.num_comments >= minComments)
    .sort((a, b) => b.data.num_comments - a.data.num_comments);

  return sortedItems;
};

const Gallery = ({ loading, comments, minComments }) => {
  if (loading) {
    return <Spinner />;
  }

  const itemsByComments = getItemsByComments(comments, minComments);

  return (
    <ul className='gallery row'>
      {itemsByComments.map(({ data }) => (
        <GalleryItem item={data} key={data.id} />
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  loading: PropTypes.bool.isRequired,
  comments: PropTypes.array.isRequired
};

export default Gallery;
