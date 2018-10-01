import React from 'react';
import Button from './Button';

const Menu = ({activeButtonIndex, changeActiveIndex, className, menuButtons, label }) => {
    return (
      <div>
          <ul className={className}>
            { menuButtons.map((button, index) =>
              <li key={index}>
                <Button label={button.label} isActive={activeButtonIndex === index} changeIndex={() => changeActiveIndex(index)} />
              </li>
          )}
          </ul>
      </div>
      )
  }

export default Menu;
