/*
class vs className

Grammar in JSX is mostly the same as in HTML, but there are some differences to watch out. 
Probably the most frequent of these involves the word 'class'.

In HTML, it’s common to use class as an attribute name.

In JSX, you can’t use the word class! You have to use className instead.

This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript!
*/

<h1 className="big">Hello World</h1>

/*
Self-Closing Tags

Most HTML elements use two tags: an opening tag (<div>), and a closing tag (</div>). 
However, some HTML elements such as <img> and <input> use only one tag.
When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket.

In JSX, you HAVE to include the slash. 
If you write a self-closing tag in JSX and forget the slash, you will raise an error:
*/

/*
Works in JSX:
<br />

//Doesn't work in JSX:
<br>
*/

/*
JavaScript In JSX 

Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript.
JSX doesn’t add numbers - it reads them as text, just like HTML.

You need a way to write code that says, “Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX.”
You can do this by wrapping your code in curly braces.
Take a look at the example below:
*/

ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
// Everything inside of the curly braces will be treated as regular JavaScript.

/*
Variables in JSX

When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.
That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.
*/

// Declare a variable:
const name = 'Vinícius';

// Access your variable from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;

//When writing JSX, it’s common to use variables to set attributes.

// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

/*
Event Listeners in JSX

JSX elements can have event listeners, just like HTML elements can.
You create an event listener by giving a JSX element a special attribute. 

Here’s an example:
*/

<img onClick={myFunc} />

/*
An event listener attribute’s name should be something like onClick or onMouseOver:
the word on, plus the type of event that you’re listening for

Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover. 
In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.
*/

/*
JSX Conditionals: If Statements That Don't Work

You can not inject an if statement into a JSX expression. The code will break!
*/

(
  <h1>
    {
      if (visit.complete) {
        'Thank you for your visiting!'
      }
    }
  </h1>
)

/*
JSX Conditionals: If Statements That Do Work

One option is to write an if statement, and not inject it into JSX.
*/

if (user.age >= 18) {
  message = (
    <h1>
      You can drink beer!
    </h1>
  );
} else {
  message = (
    <h1>
      You must wait until you become 18 yo!
    </h1>
  );
}

// The if statement is on the outside, and no JavaScript injection is necessary.

/*
The Ternary Operator

The ternary operator works the same way in React as it does in regular JavaScript.

Recall how it works: you write x ? y : z, where x, y, and z are all JavaScript expressions. 
When your code is executed, x is evaluated as either “truthy” or “falsy.” 
If x is truthy, then the entire ternary operator returns y. 
If x is falsy, then the entire ternary operator returns z
*/

const drinkingAge = (
  <h1>
    { age >= 18 ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

/*
JSX Conditionals: && operator

'&&' works best in conditionals that will sometimes do an action, but other times do nothing at all.
*/

const tasty = (
  <ul>
    { !baby && <li>Apple Cream</li> }
    { age > 15 && <li>Pizza</li> }
    { age > 20 && <li>Açaí</li> }
    { age > 25 && <li>Oysters</li> }
  </ul>
)

/*
.map method in JSX

The array method .map() comes up often in React.
It’s good to get in the habit of using it alongside JSX.
If you want to create a list of JSX elements, then .map() is your best option.
*/

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>

/*
In the above example, we start out with an array of strings. 
We call .map() on this array of strings, and the .map() call returns a new array of <li>'s.
*/

/*
Keys

When you make a list in JSX, sometimes your list will need to include keys.
*/

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>


/*
A key is a JSX attribute. The attribute’s name is key. 
The attribute’s value should be something unique, similar to an id attribute.

Keys don’t do anything that you can see! React uses them internally to keep track of lists.
If you don’t use keys when you’re supposed to.
React might accidentally scramble your list-items into the wrong order.
*/

// React.createElement

const h1 = <h1>Hello world</h1>;

//can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);