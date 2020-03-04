import React from 'react';

import './Refresh.css';

const Refresh = ({ refreshStatus, onRefresh }) => {
  let value = 'Start';

  refreshStatus ? (value = 'Stop') : (value = 'Start');

  return (
    <button className='btn btn-warning' onClick={onRefresh}>
      {value} auto refresh
    </button>
  );
};

export default Refresh;
