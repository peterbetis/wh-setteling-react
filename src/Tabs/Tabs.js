import React from 'react';
import Tab from './Tab';

const Tabs = ({label, activeTab, tabs, changeActiveTab, activeButtonIndex}) => {
    return (
      <div className={'tabs ' + (activeButtonIndex === 0 ? 'visible' : '')} >
        <h2>TABS</h2>
        {
          tabs.map((tab, index) =>
            <Tab className={tab.className} title={tab.title} key={index} activeTab={activeTab === index} showTab={() => changeActiveTab(index)} />
        )}
        <div className="tabContainer">
          <div className={'tabcontent '+ (activeTab === 0 ? 'active' : '')}>
            <h3>London</h3>
            <p>London is the capital city of England.</p>
          </div>

          <div className={'tabcontent '+ (activeTab === 1 ? 'active' : '')}>
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
          </div>

          <div className={'tabcontent '+ (activeTab === 2 ? 'active' : '')}>
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        </div>
        <br />
      </div>
    )
  }

export default Tabs;
