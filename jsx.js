/*
Introduction to React 

JSX - JavaScript syntax extension

It was written to be used with React. JSX code looks a lot like HTML, but web browsers can’t read it!
In this case, it means that JSX is not valid JavaScript. 
If a JavaScript file contains JSX code, then that file will have to be compiled. 
That means that before the file reaches a web browser, a JSX compiler will translate any it into regular JavaScript.
JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go.

That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array...
Take a look at the examples below:
*/

const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
  goalkeeper: <li>Alisson Becker</li>,
  defender: <li>Virgil Van Dijk</li>,
  midfielder: <li>Fabinho</li>,
  striker: <li>Mohamad Salah</li>,
  coach: <li>Jurgen Klopp</li>
};

// JSX elements can have attributes, just like HTML elements can, like:

<a href="http://www.example.com">Welcome to the Web</a>;
 
const title = <h1 id="title">Introduction to React.js: Part I</h1>; 

/*
Nested JSX

You can nest JSX elements inside of other JSX elements, just like in HTML.
*/

<a href="https://www.example.com">
  <h1>
    Click me!
  </h1>
</a>

// If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. 

const theExample = (
  <a href="https://www.example.com">
    <h1>
      Click me!
    </h1>
  </a>
);


/*
Nested JSX expressions can be saved as variables, passed to functions, etc.

JSX expression must have exactly one outermost element.
*/

const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
//this code will work.

const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
// this code will not.

/*
Rendering JSX

To render a JSX expression means to make it appear on screen.
ReactDOM is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.
ReactDOM.render() is the most common way to render JSX. 
It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. 
That is the way to make a JSX expression appear onscreen.
*/

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

/*
ReactDOM makes its first argument appear onscreen.
The first argument is appended to whatever element is selected by the second argument.

ReactDOM.render()‘s first argument should evaluate to a JSX expression, it doesn’t have to literally be a JSX expression.
The first argument could also be a variable, so long as that variable evaluates to a JSX expression.
*/

const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(
  toDoList, 
  document.getElementById('app')
);

/* 
In this example, we save a JSX expression as a variable named toDoList. 
We then pass toDoList as the first argument to ReactDOM.render():
*/

/*
The Virtual DOM

One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.
That means that if you render the exact same thing twice in a row, the second render will do nothing.
*/

const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:
ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:
ReactDOM.render(hello, document.getElementById('app'));