import React from 'react';

class B extends React.Component {
  render () {        
    return (
      <h3>
        this is B
        <p>{this.props.data}</p>
      </h3>
    )
  }
}

export default B;