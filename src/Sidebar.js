import React from 'react';
import Menu from './Menu';

const Sidebar = ({menuButtons, activeButtonIndex, changeActiveIndex}) => {
    const className = 'side-menu';
    return (
      <aside>
        <h1>Sidebar</h1>
        <Menu menuButtons={menuButtons} className={className} activeButtonIndex={activeButtonIndex} changeActiveIndex={changeActiveIndex} />
      </aside>
      )
    }

export default Sidebar;
