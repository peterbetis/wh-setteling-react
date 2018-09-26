import React from 'react';
import Button from './Button';

const Menu = (props) => {

    const handleClick = () => console.log('click');

    return (
      <ul className={props.className}>
        <li>
          <Button label="button 1" onClick={handleClick} />
        </li>
        <li>
          <Button label="button 2"/>
        </li>
      </ul>
      )
  }

export default Menu;
