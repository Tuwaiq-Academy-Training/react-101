import React from 'react';

const TextArea = ({ title, body, footer }) => {
  return (
    <div className='text-area'>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{footer}</p>
    </div>
  );
};

export default TextArea;
