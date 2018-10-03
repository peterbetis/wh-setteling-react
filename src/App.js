import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const buttons = [
  {
    label: 'Tabs'
  },
  {
    label: 'Accordions'
  },
  {
    label: 'Public Ip'
  }
];

const tabs = [
  {
    title: 'London',
    desc: 'London is the capital city of England.'
  },
  {
    title: 'Paris',
    desc: 'Paris is the capital of France.'
  },
  {
    title: 'Tokyo',
    desc: 'Tokyo is the capital of Japan.'
  }
];

class App extends Component {
  state = {
    activeButtonIndex: null,
    activeTab: null,
    activeAccordionItem: null
  }

  handleActiveIndex = (activeButtonIndex) => {
    this.setState({activeButtonIndex});
  }

  handleActiveTab = (activeTab) => {
    this.setState({activeTab});
  }

  render() {
    const { activeButtonIndex } = this.state;
    return (
      <div>
        <Header className='App-header' menuButtons={buttons} activeButtonIndex={activeButtonIndex} changeActiveIndex={this.handleActiveIndex} />
        <Sidebar className='App-header' menuButtons={buttons} activeButtonIndex={activeButtonIndex} changeActiveIndex={this.handleActiveIndex} />
        <Content activeTab={this.state.activeTab} tabs={tabs} activeButtonIndex={activeButtonIndex} changeActiveTab={this.handleActiveTab} />
      </div>
    );
  }

}

export default App;
