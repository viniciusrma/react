/* This line of code creates a new variable called React
It's value is a particular, imported JavaScript object from the react library */
import React from 'react';

/* The methods imported from 'react-dom' are meant for interacting with the DOM. 
You are already familiar with ReactDOM.render(). */
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);