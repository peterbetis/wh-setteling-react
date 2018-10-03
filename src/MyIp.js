import React, {Component} from 'react';

// const MyIp = () => {

class MyIp extends Component {

    getIpData = async() => {
      const api_call = await fetch('https://api.ipify.org/?format=json');
      const data = await api_call.json()
      console.log('data = ',data)
      return data
    }

    render() {
      const { data } = this.getIpData();
      return (
        <div>
          Ip: {data}
        </div>
      )
    }
  }

export default MyIp;
