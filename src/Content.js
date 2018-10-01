import React from 'react';
import Tabs from './Tabs.js';

const Content = ({activeButtonIndex, activeTab, tabs, changeActiveTab}) => {
    return (
      <div className='content'>
        <h1>Content</h1>
        <p>Current active Menu Buttons index: {activeButtonIndex}</p>
        <br />
        <Tabs activeTab={activeTab} tabs={tabs} changeActiveTab={changeActiveTab} />
      </div>
      )
  }

export default Content;
