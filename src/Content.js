import React from 'react';

const Content = (props) => {
    return (
      <div className="content">
        <h1>Content</h1>
        <p>
          {props.content}
        </p>
      </div>
      )
  }

export default Content;
