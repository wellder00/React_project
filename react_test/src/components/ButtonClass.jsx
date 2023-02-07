import React from 'react';

class Button extends React.Component {
  render() {
    return <button onClick = {this.props.onClick} className={this.props.class}>{this.props.children}</button>;
  }
}

export default Button;
