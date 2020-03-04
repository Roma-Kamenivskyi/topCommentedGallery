import React from 'react';

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
