import React, {Component} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';

const buttons = [
  {
    label: 'button 1'
  },
  {
    label: 'button 2'
  },
  {
    label: 'button 3'
  },
  {
    label: 'button 4'
  }
];

const tabs = [
  {
    title: 'tab 1',
    className: 'tab'
  },
  {
    title: 'tab 2',
    className: 'tab'
  },
  {
    title: 'tab 3',
    className: 'tab'
  },
  {
    title: 'tab 4',
    className: 'tab'
  }
]

class App extends Component {
  state = {
    activeButtonIndex: 0,
    activeTab: 0
  }

  handleActiveIndex = (activeButtonIndex) => {
    this.setState({activeButtonIndex});
  }

  handleActiveTab = (activeTab) => {
    this.setState({activeTab});
    console.log('activeTab = ',activeTab);
  }

  render() {
    return (
      <div>
        <Header className='App-header' menuButtons={buttons} activeButtonIndex={this.state.activeButtonIndex} changeActiveIndex={this.handleActiveIndex} />
        <Sidebar className='App-header' menuButtons={buttons} activeButtonIndex={this.state.activeButtonIndex} changeActiveIndex={this.handleActiveIndex} />
        <Content activeTab={this.state.activeTab} tabs={tabs} activeButtonIndex={this.state.activeButtonIndex} changeActiveTab={this.handleActiveTab} />
      </div>
    );
  }

}

export default App;
