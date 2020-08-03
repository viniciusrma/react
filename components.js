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

/*
Use Multiline JSX in a Component

Multi-line JSX expression should always be wrapped in parentheses!
*/

class UniverseTalk extends React.Component {
  render() {
    return 
    // A render() function must have a return statement.
    (
      <blockquote>
        <p>
          The universe is full of objects, more or less interesting.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Universe">
            Universe
          </a>
        </cite>
      </blockquote>
    );
  }
};

// Use a Variable Attribute in a Component

const friends = {
  friend1: Alisson,
  friend2: Debora,
  friend3: Matheus,
};

class Friend extends React.Component {
  render() {
    let friend = friends[0];
  	return (
    	<div>
        //Curly-brace JavaScript injections inside of the render function.
        <h1>{friend.friend1}</h1>
    	</div>
  	);
	}
}

// Use a Conditional in a Render Function

class TodaysPlan extends React.Component {
  render() {
    let task;
    if (!apocalypse) {
      task = 'learn React.js'
    } else {
      task = 'run around'
    }
    return <h1>Today I am going to {task}!</h1>;
  }
}

/*
Notice that the if statement is located inside of the render function, but before the return statement.
*/

// Use 'this' in a Component

class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }
  render() {
    return <h1>I like {this.food}.</h1>;
  }
}

this // refers to the object on which this‘s enclosing method, in this case, when render() is called.

/*
Use an Event Listener in a Component
In React, you define event handlers as methods on a component class. 
Like this: 
*/

class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }
  render() {
    return (
      // You must wrap the value between curly braces
      <div onHover={this.myFunc}>
      </div>
    );
  }
}