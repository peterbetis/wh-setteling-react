import React from 'react';

const Button = ({label, isActive, changeIndex}) => {

    return (
      <button className={isActive ? 'active': null} onClick={changeIndex}>
        {label}
      </button>
    )
  }

export default Button;
