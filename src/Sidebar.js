import React from 'react';
import Menu from './Menu';

const Sidebar = (props) => {
    props = {
      title: 'Sidebar'
    }
    return (
      <aside>
        <h1>{props.title}</h1>
        <Menu className='side-menu' />
        <Menu className='side-menu' />
      </aside>
      )
  }

export default Sidebar;
