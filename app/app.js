import React from 'react';
import A from './a';
import B from './b';

var componentMap = {
  A: function(data) {
    var props = {...data};
    return <A data={props} />
  },
  B: function(data) {
    var props = {...data};
    return React.createElement(B, props);
  }
}
window.init = function(element, componentName, data) {  
  console.log(VERSION)
  React.render((
    componentMap[componentName](data)
  ), element);
}