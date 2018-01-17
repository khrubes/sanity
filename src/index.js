import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox
    url='http://localhost:3001/api/comments' // from 3001
    pollInterval={2000} />,
  document.getElementById('root')
);
