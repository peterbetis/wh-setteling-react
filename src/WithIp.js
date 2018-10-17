import React, {Component} from 'react';
import MyIp from './MyIp.js'

class WithIp extends Component {

  constructor(props){
      super(props);
      this.state = {
          ip:''
      };
  }

  componentDidMount(){
      fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(res => {
      this.setState({
        ip:res.ip
      })
    })
  }

  render() {
    const { ip } = this.state;
    return (
        <div>
            <MyIp ip={ip} />
            <MyIp ip={ip} />
            <MyIp ip={ip} />
        </div>
    );
  }
  
}

export default WithIp;
