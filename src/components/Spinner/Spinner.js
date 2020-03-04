import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <button className='btn btn-dark d-block m-auto' type='button'>
    <span
      className='spinner-border spinner-border-sm'
      role='status'
      aria-hidden='true'
    ></span>
    Loading...
  </button>
);

export default Spinner;
