import React, {Component} from 'react';

class MyIp extends Component {
  
  render() {
    const ip = this.props.ip;    
    return (
        <div>
          {ip}
        </div>
    );
  }
  
}

export default MyIp;
