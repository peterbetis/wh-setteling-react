import React from 'react';

const AccordionItem = ({activeIndex, title, onHeaderClick, children, isActive}) => {

    console.log( title,' / isActive = ',isActive );
    const className = isActive ? 'accordion active' : 'accordion';

    return (
      <div className='accordion-tab'>
      <button className={className} onClick={onHeaderClick}><strong>{title}</strong></button>
        <div className={'panel '+ className}>
          {children}
        </div>
      </div>
    )
  }

export default AccordionItem;
