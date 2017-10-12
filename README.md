
This crash course was made by Kai Jeu Chiem, Saru Subschandran and William Arild Dahl from Applitude student association.
12/10/2017

# Introduction to JavaScript

In this course you will learn the basics of JavaScript. With JavaScript we will make a simple Tic-Tac-Toe game to demonstrate how to use DOM (Document Object Model) manipulation.

## Step 0: What are we going to do in this course
Using JavaScript we will create a simple
### Step 0.1: Recap of the previous HTML and CSS course
#### Html base elements

```html

// Tells the web browser that this document is a HTML5 version

<!DOCTYPE html>

```

```html

//Defines the root element of the HTML document. All other HTML elements must be contained within this root element.

<html></html>

```

```html
// Defines a cointainer for a web page's metadata

<head></head>

```

```html
// The container for a web page's content.

<body></body>

```

```html

// Defines a link between the current web page and external link or resource.

<link rel="stylesheet" type="text/css" href="http://www.applitude.no">


```html

// Defines a container for an external script.

<script src="/javascript/myScript.js"></script>

```

#### CSS

```css
// CSS syntax

selector {
  property: value;
  property: value;
  ...
}

// Example

h1 {
  color:red
}

// CSS id selector

#id {
    css declarations;
}

// Example

#firstname {
    background-color: blue;
}



// CSS class selector

.class {
    css declarations;
}

// Example

.intro {
    background-color: yellow;
}

```

### Step 0.2: What is JavaScript?
Usually HTML allows you to display static content directly read from the HTML document, but sometimes you would like to control multimedia, animate images or create other dynamically updating content. This can be done using the programming language, JavaScript.

JavaScript is a high-level, objectoriented programming language, alongside with HTML, CSS it is a core technology for producing web based content.

### Step 0.3: JavaScript syntax
#### Variables
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
#### Fuctions
Functions are block of codes that performs particular tasks. They are executed when it is invoked.
Creating functions are easy, you only have to use the keyword **function** as shown bellow.
```javascript
function myFunction ( parameter ... ) {
  //my code
  ...
}
```
#### if-else statement
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
#### while-loop and for-loop
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
#### Printing to console
Sometimes you would like to see if your code does what it is supposed to do, you can do this by printing a word in the console. You can do this using the code bellow.
```javascript
console.log("Hello world!");

//CONSOLE
//Hello world!
```

## Step 1: Prepare the HTML and CSS

Before we start programming using javascript we have to set up the HTML and CSS.

#### Prepare the HTML

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

#### Prepare the CSS
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

## Step 2: JavaScript

### Step 2.1: Explaining HTML objects
You might remember that we talked about how JavaScript can manipulate the HTML document. What we didn't talk about is why JavaScript are able to do so. To understand this you have to understand how the webpage loads HTML.

#### The DOM (Document Object Model) tree
![alt text](https://github.com/applitude/tic-tac-toe/blob/master/images/DOM_Tree.gif "The HTML DOM tree of object")

This is the HTML DOM tree. When the webpage is loaded the browser creates a DOM of the page. Using these Objects JavaScript has all that it needs to make HTML dynamic.

So, what can JavaScript do with these objects?
* JavaScript can manipulate all the elements in the HTML page
* JavaScript can manipulate all the attributes in the HTML page
* JavaScript can manipulate all the CSS styles in the page
* JavaScript can add new HTML elements and attributes
* JavaScript can create new HTML events in the page
* JavaScript can react to all existing HTML events in the page

Using this knowledge we can now start programming in JavaScript.

## Step 2.2: Set up the canvas
At last we can begin using JavaScript. The first we are going to do is get the canvas element, therefore we are going to define a variables canvasSize.

```javascript
var canvasSize = 500;
var squareSize = canvasSize / 3;
```
We are going to use the variable to define the canvases size. To get the canvas element from the HTML document we can reference the element from the id attribute.
```javascript
...

var canvas = document.getElementById('tic-tac-toe');
```
Now that we have the canvas object we can begin manipulating it and adding the game inside of it. Let us set the canvas width and heigth. Because the game are most likely to be square shaped we sett the width and height to the same value, in this case the canvasSize variable.

```javascript
...

canvas.width = canvasSize;
canvas.height = canvasSize;
```

Now we have taken the canvas element and placed it inside of the canvas variable. To be able to add and manipulate graphics inside of the canvas we have to create a CanvasRenderingContext2D object, we can do this as follows.

```javascript
...
var ctx = canvas.getContext('2d');
```
This object represents a two-dimensional rendering context, which can be used to draw text, lines, boxes, circles and other figures on the canvas.

Now that we have finnished preparing the canvas for use we can start creating functions and draw inside the canvas.


## Step 3: The Game
At last we can begin creating the game. But how are we going to do that? Lets start by imagine the game.

What do we need? How do we do it? The best way to answare these questions are by listing it up and answare them.

1. It has to look like a game of Tic-Tac-Toe.
* How? In Tic-Tac-Toe there are two vertical lines and two horizontal lines which creates cells of nine squares. These cells must be able to store the value of x or circle.

2. We need to be able to look at something to be able to play it.
* How? We can have something to look at by adding graphics. This can be done inside the canvas.

3. We need to be able to play the game.
* How? We should be able to play the game with the cursor. There are two players, whenever a player presses a cell it should show the graphic of an X or a circle dependant of whose turn it is.  

### Step 3: Creating the functions
Now that we know the basics of how the game is going to look like we can begin to create functions that does the right thing.

### Step 3.1: Make the board (getInitialBoard)
The first thing we need to have in the game is a board. So lets create a function named getInitialBoard
```javascript
function getInitialBoard(defaultValue){
    ...
}
```
Inside the function we can address the first problem. We know that cells has to be made, this can be done by creating a 2D array. But, this raises a problem, there are no 2D arrays in JavaScript. Because there are no 2D arrays in JavaScript we have chosen to create arrays inside of an array thus creating a makeshift "2D array". To do this we use the **.push()** function to "push" values inside of the array.

Creating the board we first initialise a normal array. Afterwards we create a for-loop for the X-axis, then we nest another for-loop inside creating the Y-axis. Because we already know how many cells are needed inside a gaem of Tic-Tac-Toe (three columns, and three rows), we can set both the condition to continue until it has run three times (3^2). Everytime the X-axis for-loop runs it pushes a new array inside of the board. Everytime the Y-axis for-loop runs it pushes a default value inside the array inside of the x positioned array. At the end it return the newly created board.

```javascript
function getInitialBoard(defaultValue) {
    var board = [];

    for(var x = 0; x < 3; x++){
        board.push([]);

        for(var y = 0; y < 3; y++) {
            board[x].push(defaultValue);
        }

    }
    return board;
}
```
Now we can create the board, adding the code bellow.
```javascript
...
var board = getInitialBoard("");
```

## Step 3.3: Draw the board in the canvas (drawLines)
We have created the board, but you might have noticed that there are nothing in the screen. This is because we haven't actually started drawing anything in the canvas yet. So let create a function that actually draws the board lines in the canvas. lets call it drawLines
```javascript
function drawLines( lineWidth, strokeStyle) {
...
}
```
It takes in two parameters, the width of the line (lineWidth), and the style of the stroke (strokeStyle).

Earlier we the object (ctx), we can now use this to draw our lines. The first thing we can do is set the width of our line using **lineWidth**, while we're at it we can also set our style stroke **styleStroke**, which in our case is should be a color. Now we can use the **beginPath** so that we can begin creating paths to draw from. We can also define where we are going to start drawing the line, **lineStart**, and how long the line are going to be, **lineLength**.
 ```javascript
function drawLines( lineWidth, strokeStyle) {
    var lineStart = 4;
    var lineLength = canvasSize - 5;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
...
}
```
At last we can begin displaying actual graphic. We are going to use the **moveTo** method to set the beginning of the path. Afterwards we can use the **lineTo** method to set the location where the line should end. The parameters are x- and y-cordinates. Now we can use  the **stroke** which draws the path defined with **moveTo** and **lineTo**.

 ```javascript
function drawLines( lineWidth, strokeStyle) {
    var lineStart = 4;
    var lineLength = canvasSize - 5;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();

    ctx.moveTo(lineStart, 1);
    ctx.lineTo(lineLength, 1);
    ctx.stroke();
...
}
```
Congratulations, we have drawn a line! Now that we are able to draw the line we are easily able to draw the rest of the lines necessary co complete the board. Using the for-loop we set multiple start and end points for the paths just modifying the x- and y-cordinates. To create a better looking line we can round of the line edges by setting **lineCap** to round.

```javascript
function drawLines( lineWidth, strokeStyle) {
    var lineStart = 4;
    var lineLength = canvasSize - 5;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.lineCap = 'round';
    ctx.beginPath();

    for(var y = 1; y <= 2; y++){
        ctx.moveTo(lineStart, y*squareSize);
        ctx.lineTo(lineLength, y*squareSize);
    }
    for(var x = 1; x <= 2; x++){
        ctx.moveTo(x * squareSize,lineStart);
        ctx.lineTo(x*  squareSize, lineLength);
    }

    ctx.stroke();

}
```

The functions for drawing the board lines are now finnished. To draw the board the only thing we need to do nos is to call the funciton.
```javascript
...
var lineColor = "#808080"; //black
drawLines(10, lineColor);
```

## Step 4: 

support

Lets start with implementing mouse support. We start by adding a event listener to the canvas. This is a function that constantly listens for imput of our choosing.


```javascript
canvas.addEventListener('mouseup', function (event){
...
});
```

The first paramether is what we want to listen for. In this case, we choose the 'mouseup' which means that when the player releases the mouse ( after pressing it down) we do something.

Now we need a way too make our game turnbased. We create a player variable so that we can know whose turn it is. Then everytime we click we change the player value.

```javascript
var player = 1;
canvas.addEventListener('mouseup', function (event) {

    if(player === 1){
        player = 2;
    }
    else{
        player = 1;
    }
...
});
```

Next we would like to know where the players are clicking. We save the mousePositon in a varable calculated by our method getMousePositon which recieves an event from the eventlistener.

```javascript
canvas.addEventListener('mouseup', function (event) {

    if(player === 1){
        player = 2;
    }
    else{
        player = 1;
    }

    var mousePosition = getMousePosition(event);
...
});
```

With the position we can now place a piece on the canvas, and since we chaged the player, each gets his/hers turn.

```javascript
canvas.addEventListener('mouseup', function (event) {

    if(player === 1){
        player = 2;
    }
    else{
        player = 1;
    }

    var mousePosition = getMousePosition(event);
    addPiece(mousePosition);
...
});
```

The last thing we do is to draw the lines again. This is because the playing area is coloring the whole square white.

```javascript
canvas.addEventListener('mouseup', function (event) {

    if(player === 1){
        player = 2;
    }
    else{
        player = 1;
    }

    var mousePosition = getMousePosition(event);
    addPiece(mousePosition);
    drawLines(10, lineColor);

});
```

 If you want to, you can change the size of the third and fourth argument in the "fillRect" method in the playingArea function, and skip this line.


The string **'mouseup'** is the name of the event, while the **function (event)** is required to sepcify the functun to run when the evnet occurs.

We can create the method that gets the mouse position now, giving it the name **getMousePosition**. It should take in the event as a parameter.
```javascript
function getMousePosition(event) {
...
}
```

To be able to register where the mouse has clicked first we have to know where it should detect the click. Lets say the canvas is the clickable space.
```javascript
function getMousePosition(event) {

    var rect = canvas.getBoundingClientRect();
...
}
```

The only thing we need to do now is to return cordinates for x and y. **clientX** and **clientY** returns the appropriate  X- and Y-cordinates within the client area. When we subtract x from the left and y from top we get the right position inside the canvas.

```javascript
function getMousePosition(event) {

    var rect = canvas.getBoundingClientRect();

    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }

}
```
Now that we can detect the mouse position we can begin adding tic-tac-toe pieces to the board.

## Step 5: Adding pieces to the board.

Now we want to add an "X" or a "O" when we press a specific cell. We'll make the function **addPiece** with the the press cordinates as the parameter.

```javascript
function addPiece(mouse){
    ...
}
```

Lets start creating some variables that can take the cordinates, then we can use those to making some conditions, if player is 1 we will draw an X, else we will draw a O.
```javascript
function addPiece(mouse){
    var xCorrdinate;
    var yCorrdinate;
    ...
    if(player === 1){
        drawX(xCoordinate, yCoordinate);
    }
    else {
        drawO(xCoordinate, yCoordinate);
    }
}
```
The variables (xCoordinate, yCoordinate) is made so that we can use it to check which square we're currently in. It will make sense later. The **drawO** and **drawX** functions will be made in **Step 5.1**.

Now that we know when to draw which piece we now have to decide where to draw them. We know that we have to draw a piece at the mouses coordinates, which means when the mouse is at the right x- and y location. To detect whether the mouse is at the right place we can nest the if statement in the right place.
```javascript
...
            if (mouse.x >= xCoordinate && mouse.x <= xCoordinate + squareSize
                && mouse.y >= yCoordinate && mouse.y <= yCoordinate + squareSize){

                ...

                if(player === 1){
                    drawX(xCoordinate, yCoordinate);
                }
                else {
                    drawO(xCoordinate, yCoordinate);
                }
            }
...
```

The last thing to do now is to iterate through all the allowed square location so that we can compare it to the mouse coordinates.

```javascript
function addPiece(mouse) {
    var xCoordinate;
    var yCoordinate;

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++) {
            xCoordinate = i * squareSize;
            yCoordinate = j * squareSize;

            if (mouse.x >= xCoordinate && mouse.x <= xCoordinate + squareSize
                && mouse.y >= yCoordinate && mouse.y <= yCoordinate + squareSize){

                if(player === 1){
                    drawX(xCoordinate, yCoordinate);
                }
                else {
                    drawO(xCoordinate, yCoordinate);
                }
            }
        }
    }
}
```

With this we finnished the addPieces method. The last thing to do now is to actually draw the pieces.

### Step 5.1: Creating X's and the O's

We've already taken care of when something has to be drawn. Now lets draw it.
We start by making the function **drawO** and adding the necessarry variables.
```javascript
function drawO(xCoordinate, yCoordinate){
    var halfSquare = (squareSize/2);
    var centerX = xCoordinate + halfSquare;
    var centerY = yCoordinate + halfSquare;
    var radius = (squareSize - 70) / 2;
    var start = 0*Math.PI;
    var end = 2*Math.PI;

    ...

}
```

We set the line thickness with **lineWidth** and set the color to green with **styleStroke**, then we use **beginPath** so that we can begin drawing.
```javascript
function drawO(xCoordinate, yCoordinate){
    var halfSquare = (squareSize/2);
    var centerX = xCoordinate + halfSquare;
    var centerY = yCoordinate + halfSquare;
    var radius = (squareSize - 70) / 2;
    var start = 0*Math.PI;
    var end = 2*Math.PI;

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    ...

}
```
To make a circle we have to use the **arc** method. The two first parameters is the x and y coordinates of the center of the circle.
The third parameter is the radius of the circle. The forth parameter is the starting angle, and the last parameter is the ending angle (The angles is in radians). Lastly we can draw the circle with the **stroke** method.
```javascript
function drawO(xCoordinate, yCoordinate){
    var halfSquare = (squareSize/2);
    var centerX = xCoordinate + halfSquare;
    var centerY = yCoordinate + halfSquare;
    var radius = (squareSize - 70) / 2;
    var start = 0*Math.PI;
    var end = 2*Math.PI;

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, start, end);
    ctx.stroke();

}
```

The **drawO** is now finnished.

The remaining **drawX** function is really similar, it only uses two lines that crosses eachother. We start by making a variable and setting the color and the line width.
```javascript
function drawX(xCoordinate, yCoordinate){
    var offset = squareSize/4;
    ctx.strokeStyle = "#00cc00";
    ctx.lineWidth = 10;
    ctx.beginPath();

    ...

```

To make a diagonal line we just have to offsett the path.
```javascript
function drawX(xCoordinate, yCoordinate){
    var offset = squareSize/4;
    ctx.strokeStyle = "#00cc00";
    ctx.lineWidth = 10;
    ctx.beginPath();

    ctx.moveTo(xCoordinate + offset, yCoordinate + offset);
    ctx.lineTo(xCoordinate + squareSize - offset,
        yCoordinate + squareSize -offset);
    ...
}
```

Now we have made the path we can just mirror the same thing to make a line to the other side. Then draw the with the **stroke** method.
```javascript
function drawX(xCoordinate, yCoordinate){
    ctx.strokeStyle = "#00cc00";
    //ctx.lineWidth = 10;
    ctx.beginPath();
    var offset = squareSize/4;

    ctx.moveTo(xCoordinate + offset, yCoordinate + offset);
    ctx.lineTo(xCoordinate + squareSize - offset,
        yCoordinate + squareSize -offset);

    ctx.moveTo(xCoordinate + offset, yCoordinate + squareSize - offset);
    ctx.lineTo(xCoordinate + squareSize - offset,
        yCoordinate + offset);

    ctx.stroke();

}
```

At last we finnished. We are now able to play the game. Trying it out you might notice that you can change the pieces multiple times, that's the logic of the game. We're not going to do this today. If you want to do it yourself a good tips is to use the "2D array" **board** variable we made earlier to make winn conditions and to restrict disallow changing the pieces.

We will add the finnished game at a later date.
