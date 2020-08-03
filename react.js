/* This line of code creates a new variable called React
It's value is a particular, imported JavaScript object from the react library */
import React from 'react';

/* The methods imported from 'react-dom' are meant for interacting with the DOM. 
You are already familiar with ReactDOM.render(). */
import ReactDOM from 'react-dom';

/*
JavaScript Classes in React

A component class is like a factory that builds components.
It builds these components by consulting a set of instructions, which you must provide.

React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. 
You can do this by using the syntax 'class YourComponentName extends React.Component {}'.
JSX uses capitalization to distinguish HTML or component instances.
That is the React-specific reason why component class names must begin with capital letters.
*/

class MyComponentClass extends React.Component {
  // instructions go here, between the curly braces
  render() 
  // A render method is a property whose name is render, and whose value is a function.
  {
    return
    //A render method must contain a return statement
    <h1>Hello world</h1>;
  }
};

// Component Instance
ReactDOM.render(
  //ReactDOM.render() will tell <MyComponentClass /> to call its render method, as it is the first argument
  <MyComponentClass />,
  // The second argumet tells the program where this render should happen
  document.getElementById('app')
);