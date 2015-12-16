import React from 'react';

class C extends React.Component {
  render () {        
    return (
      <h3>
        this is C
        {
            this.props.enabled
            ? this.props.children
            : "no children"
        }        
      </h3>
    )
  }
}

export default C;