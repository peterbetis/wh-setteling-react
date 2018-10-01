import React from 'react';
import Tab from './Tab';

const Tabs = ({label, activeTab, tabs, changeActiveTab}) => {

    return (
      <div className='tabs'>
        {
          tabs.map((tab, index) =>
            <Tab className={tab.className} title={tab.title} key={index} activeTab={activeTab === index} showTab={() => changeActiveTab(index)} />
        )}
      </div>
    )
  }

export default Tabs;
