import React from 'react';
import Tabs from './Tabs/Tabs.js';
import Accordion from './Accordion/Accordion.js';

const Content = ({
  activeButtonIndex,
  activeTab,
  tabs,
  changeActiveTab,
  activeAccordionItem,
  accordionItems,
  title,
  toggleAccordion
}) => {
    var activeButtonsMessage;
    if (activeButtonIndex != null) {
        activeButtonsMessage = <p>Current active Menu Button: {activeButtonIndex+1}</p>;
    } else {
      activeButtonsMessage = <h3>Press any button from the menus</h3>;
    }
    return (
      <div className='content'>
        <h1>Content</h1>
        {activeButtonsMessage}
        <br />
        <Tabs activeTab={activeTab} tabs={tabs} changeActiveTab={changeActiveTab} activeButtonIndex={activeButtonIndex} />
        <Accordion activeAccordionItem={activeAccordionItem} accordionItems={accordionItems} toggleAccordion={toggleAccordion} activeButtonIndex={activeButtonIndex} />
      </div>
      )
  }

export default Content;
