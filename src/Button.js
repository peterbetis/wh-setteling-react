import React from 'react';

const Button = ({label, isActive, changeIndex}) => {

    return (
      <button className={isActive ? 'active': null} onClick={changeIndex}>
        {label}
      </button>
    )
  }


  // class Button extends Component {
  //
  //   constructor(props) {
  //     super(props);
  //     this.state = { active: false };
  //   }
  //
  //   handleClick() {
  //     console.log('handleClick');
  //     const currentState = this.state.active;
  //     this.setState({ active: !currentState });
  //   }
  //
  //   render() {
  //     return (
  //       <button className={this.state.active ? 'active': null} onClick={(e) => { this.handleClick(e)}}>
  //         {this.props.label}
  //       </button>
  //     )
  //   }
  // }


export default Button;
