import React, {Component} from 'react';
import AccordionItem from './AccordionItem';

const accordionItems = [
  {
    title: 'Accordion item 1',
    children: 'content 1'
  },
  {
    title: 'Accordion item 2',
    children: 'content 2'
  },
  {
    title: 'Accordion item 3',
    children: 'content 3'
  },
  {
    title: 'Accordion item 4',
    children: 'content 4'
  }
]

class Accordion extends Component {
  state = {
    activeIndex: 0
  }

  toggleAccordion = (activeIndex) => {
    this.setState({activeIndex});
  }

  render() {
    const { activeIndex } = this.state;
    const { activeButtonIndex } = this.props;
    return (
      <div className={'tabs ' + (activeButtonIndex === 1 ? 'visible' : '')} >
        <h2>ACCORDIONS</h2>
        {
          accordionItems.map((item, index) =>
            <AccordionItem isActive={activeIndex === index} title={item.title} key={index} onHeaderClick={() => this.toggleAccordion(index)} children={item.children}/>
        )}
      </div>
    )
  }
}

export default Accordion;
