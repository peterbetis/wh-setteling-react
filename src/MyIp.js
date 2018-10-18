import React, {Component} from 'react';

class MyIp extends Component {
  
  render() {
    const ip = this.props.ip;    
    return (
        <div>
          Ip: <input type='text' value={ip}></input>
        </div>
    );
  }
  
}

export default MyIp;
