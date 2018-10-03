import React from 'react';
import Tabs from './Tabs/Tabs.js';
import Accordion from './Accordion/Accordion.js';
import accordionItems from './Accordion/AccordionItems.json';

const Content = ({
  activeButtonIndex,
  activeTab,
  tabs,
  changeActiveTab,
  activeAccordionItem,
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
        {activeButtonIndex === 0 &&
          <Tabs activeTab={activeTab} tabs={tabs} changeActiveTab={changeActiveTab} />
        }
        {activeButtonIndex === 1 &&
          <Accordion items={accordionItems} activeItemslimit={3} />
        }
      </div>
      )
  }

export default Content;
