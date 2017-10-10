
This crash course was made by Kai Jeu Chiem, Saru Subschandran and William Arild Dahl from Applitude student association.
12/10/2017

# Introduction to JavaScript

In this course you will learn the basics of JavaScript. With JavaScript we will make a simple Tic-Tac-Toe game to demonstrate how to use DOM (Document Object Model) manipulation.

# Step 0: What are we going to do in this course
Using JavaScript we will create a simple 
# Step 0.1: Recap of the previous HTML and CSS course
HTML(Hyper Text Markup Language)
CSS(Cascading Style Sheet)

# Step 0.2: What is JavaScript?
Usually HTML allows you to display static content directly read from the HTML document, but sometimes you would like to control multimedia, animate images or create other dynamically updating content. This can be done using the programming language, JavaScript. 

# Step 0.3: JavaScript syntax
## Variables
In JavaScrip variables are containers which stores data. In the example bellow you can see how to create variables.
```javascript
var x = 1;
var y = 2;
var z = x + y;
// x has stored the value 1
// y has stored the value 2
// z has stored the value (x + y) which is 3
```
Much like other programming languages the sign (=) is an assignment operator, thus you can use it to re-assign variables
```javascript
var x = 1;
// x has stored the value 1
x = 2
// x has now stored the new value of 2
```
There are different datatypes in javascript like integer, float and String values.
```javascript
var a = 10;
var pi = 3.14;

//It doesn't matter if you use single quotation(' ') or double quotation(" ") both of them makes a String
//The important matter is to be consistent.
var str1 = "My name is Kai";
var str2 = 'This is Saru';
```
## Fuctions
Functions are block of codes that performs particular tasks. They are executed when it is invoked.
Creating functions are easy, you only have to use the keyword **function** as shown bellow.
```javascript
function myFunction ( parameter ... ) {
  //my code
  ...
}
```
## if-else statement
Like in other programming languages you would sometimes like to set conditions to your program, this can be done using the if-else statement shown bellow.
```javascript
if (condition){
  //DO THIS
  ...
}else if(condition){
  //DO THIS
  ...
} else {
  //DO THIS
  ...
}
```
## while-loop and for-loop
A loop can execute a block of code a defined number of time, we have two different type of loop we an use. The while-loop and the for-loop.
```javascript
//Runs while the condition is true
while(condition){
  //Run block of code
}

for(int i = 0; i < n; i++){
  //Run block of code i n number of time
}
```
## Printing to console 
Sometimes you would like to see if your code does what it is supposed to do, you can do this by printing a word in the console. You can do this using the code bellow.
```javascript
console.log("Hello world!");

//CONSOLE
//Hello world!
```

# Step 1: Prepare the HTML and CSS

Before we start programming using javascript we have to set up the HTML and CSS.

## Prepare the HTML

First lets set up the basic HTML structure.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    ...
</body>
</html>
```
We can then add a **<title>** tag with a title inside the **<head>** tag.
 
```HTML
...
<head>
    <meta charset="UTF-8">
    <title>TicTacToe</title>
</head>
...
```

To set the alignments and to style the HTML we have to link to a **.css** file. This means we have to tell the document to link to the **.css** file in the header. Lets call this file 'ticTacToe.css'. 
```HTML
...
<head>
    ...
    <title>TicTacToe</title>
    <link rel="stylesheet" href="ticTacToe.css"></link>
</head>
...
```

**rel="stylesheet"** is an attribute that specifies the relationship between this document and the linked document. In this case the attribute is a stylesheet. It is only used when the **href="..."** attribute is present, which specifies the links destination.

Now lets create a division tag **<div>** inside the body **<body>** which we can use to center and wrap the content inside.

```HTML
...
<body>
    <div class="center-wrapper-parent">
        <div class="canvas-wrapper">
            ...
        </div>
    </div>
</body>
...
```

**class="className"** is an attribute that makes it possible to define styles which are equal to all elements with the same name. The classes are defined inside a **.css** file.

Now we have to find a way to display graphics for our game. To do this we can use a canvas. Lets add the canvas **<canvas>** to our document.
```HTML
<body>
    <div class="center-wrapper-parent">
        <div class="canvas-wrapper">
            <canvas id="tic-tac-toe"></canvas>
            ...
        </div>
    </div>
</body>
```
The canvas is actually only a container, it cannot create graphical content, only contain it. To actually draw the graphics inside the canvas we have to use JavaScript. So, lets add a link to some JavaScript file that we are going to make later. Lets add the script tag **<script>** and reference to the "TicTackToe.js" file using **src="..."**. This can be done as shown bellow.

```HTML
<body>
    <div class="center-wrapper-parent">
        <div class="canvas-wrapper">
            <canvas id="tic-tac-toe"></canvas>
            <script src="TicTacToe.js"></script>
        </div>
    </div>
</body>
```
You might be wondering why the canvas has an id attribute, this is so that later we can reference to this id inside the JavaScript file.

Now we have finnished setting up our **.html** file. If you want to look at the whole HTML document you can take a look at the finnished document bellow.
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="ticTacToe.css"></link>
</head>
<body>
    <div class="center-wrapper-parent">
        <div class="canvas-wrapper">
            <canvas id="tic-tac-toe"></canvas>
            <script src="TicTacToe.js"></script>
        </div>
    </div>
</body>
</html>
```

## Prepare the CSS
Next let us prepare the css file. The only thing needed to add are the id "#tic-tac-toe" and the two classes ".canvas_wrapper" and ".canvas-wrapper-parent".

```CSS
#tic-tac-toe {
    display: block;
    margin: 0 auto;
}

.canvas_wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
}

.canvas-wrapper-parent {
    transform-style: preserve-3d;
}
```

# Step 2: JavaScript - The game
Before we start programming in JavaScript let us imaginate how and where the game is going to be.

1. We need to be able to look at something to be able to play it.
* How? We can have something to look at by adding graphics. This can be done inside the canvas.

2. It has to look like a game of Tic-Tac-Toe.
* How? In Tic-Tac-Toe there are two vertical lines and two horizontal lines which creates cells of nine squares.

3. We need to be able to play the game.
* How? We should be able to play the game with the cursor. There are two players, whenever a player presses a cell it should show a graphic of an X or a circle dependant of whos turn it is.  

Now that we know how the game is going to be played we can start coding the game.

## Step 2.1: Creating the canvas
You might remember that we talked about how JavaScript can manipulate the HTML document. What we didn't talk about is why JavaScript are able to do so. To understand this you have to understand how the webpage loads HTML.

### The DOM (Document Object Model) tree
![alt text](https://github.com/applitude/tic-tac-toe/blob/master/DOM_Tree.gif "The HTML DOM tree of object")

This is the HTML DOM tree. When the webpage is loaded the browser creates a DOM of the page. Using these Objects JavaScript has all that it needs to create dynamic HTML.
What can JavaScript do with the objects?
* JavaScript can manipulate all the elements in the HTML page
* JavaScript can manipulate all the attributes in the HTML page
* JavaScript can manipulate all the CSS styles in the page
* JavaScript can add new HTML elements and attributes
* JavaScript can create new HTML events in the page
* JavaScript can react to all existing HTML events in the page

//TODO
```javascript
``` 

## Step 2.2: Get Element from HTML 

# Step 3: Make the board (getInitialBoard)

## Step 3.1: Draw the lines (drawLines)
### lineWidth
### lineCap
### strokeStyle
### beginPath
### moveTo
### lineTo
### stroke

## Step 3.2: Set The playing area (playingArea)
### fillStyle
### fillRect(xPos, yPos, xSize, ySize)

## Step 4: Event listener and mouse "click" detection
