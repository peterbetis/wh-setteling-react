import React, {Component} from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {

  state = {
    activeIndex: []
  }

  checkActive(index) {
      const isActive = this.state.activeIndex.indexOf(index) >= 0 ;
      return isActive
  }

  openAccordion = (index) => {
    const activeIndexes = this.state.activeIndex.slice()
    const isAlreadyActive = this.checkActive(index)
    const { activeItemslimit } = this.props;
    if (!isAlreadyActive) {
      if (activeIndexes.length < activeItemslimit) {
          this.setState({activeIndex: activeIndexes.concat([index])})
      } else {
          activeIndexes.shift()
          this.setState({activeIndex: activeIndexes.concat([index])})
      }
    }
  }

  render() {
    const { activeButtonIndex } = this.props;
    const { items } = this.props;
    return (
      <div className={'tabs ' + (activeButtonIndex === 1 ? 'visible' : '')} >
        <h2>ACCORDIONS</h2>
        {
          items.map((item, index) =>
            <AccordionItem isActive={this.checkActive(index)} title={item.title} key={index} onHeaderClick={() => this.openAccordion(index)} >
              {item.children}
            </AccordionItem>
        )}
      </div>
    )
  }
}

export default Accordion;
