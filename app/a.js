import React from 'react';

class A extends React.Component {
  render () {        
    return (
      <h3>
        this is A
        <p>{this.props.data}</p>
      </h3>
    )
  }
}

export default A;