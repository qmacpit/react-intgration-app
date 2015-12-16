import React from 'react';
import A from './a';
import B from './b';
import C from './c';

var componentMap = {
  A: function(data) {
    var props = {...data};
    return <A data={props} />
  },
  B: function(data) {
    var props = {...data};
    return React.createElement(B, props);
  },
  C: function(data) {
    return <C enabled={data.enabled}><h1>C content</h1></C>
  }
}
window.init = function(element, componentName, data) {  
  console.log(VERSION)
  React.render((
    componentMap[componentName](data)
  ), element);
}