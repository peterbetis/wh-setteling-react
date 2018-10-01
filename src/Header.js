import React from 'react';
import Menu from './Menu';

const Header = ({menuButtons, activeButtonIndex, changeActiveIndex}) => {
    const className = 'menu';
    return (
      <div className='App-header'>
        <h1>Header</h1>
        <Menu menuButtons={menuButtons} className={className} activeButtonIndex={activeButtonIndex} changeActiveIndex={changeActiveIndex} />
      </div>
      )
  }

export default Header;
