import React from 'react';

const Button = (props) => {
    return (
      <button onClick={props.onClickButton}>
        {props.label}
      </button>
    )
  }

export default Button;
