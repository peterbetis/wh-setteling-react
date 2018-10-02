import React from 'react';

const Tab = ({title, activeTab, className, showTab}) => {

    return (
      <button className={activeTab ? 'active': null} onClick={showTab} >
        {title}
      </button>
    )
  }

export default Tab;
