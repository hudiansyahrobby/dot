import React from 'react';
import ReactLoading from 'react-loading';
import './index.scss';

const Loading = () => (
  <div id="loading">
    <ReactLoading type="bars" color="black" />
  </div>
);

export default Loading;
