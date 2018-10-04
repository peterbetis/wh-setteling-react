import React, {Component} from 'react';

class MyIp extends Component {

  constructor(props){
      super(props);
      this.state = {
          data:''
      };
  }

  componentDidMount(){
      fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(res => {
      this.setState({
        data:res.ip
      })
    })
  }

  render() {
    const { data } = this.state;
    return (
        <div>
          Ip: {data}
        </div>
    );
  }
  
}

export default MyIp;
