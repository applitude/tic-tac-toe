'use strict';

var canvas = document.getElementById('tic-tac-toe');
var ctx = canvas.getContext('2d');
var player = 1;


var lineColor = "#808080";
var canvasSize = 500;
var squareSize = canvasSize / 3;
canvas.width = canvasSize;
canvas.height = canvasSize;
ctx.translate(0.5, 0.5);

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

var board = getInitialBoard("");

function addPiece(mouse) {
    var xCoordinate;
    var yCoordinate;

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++) {
            xCoordinate = i * squareSize;
            yCoordinate = j * squareSize;

            if (mouse.x >= xCoordinate && mouse.x <= xCoordinate + squareSize
                && mouse.y >= yCoordinate && mouse.y <= yCoordinate + squareSize){

                playingArea(xCoordinate, yCoordinate);

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

function playingArea(xCoordinate, yCoordinate) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(xCoordinate, yCoordinate, squareSize, squareSize);
}

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


function drawLines( lineWidth, strokeStyle) {
    var lineStart = 4;
    var lineLength = canvasSize - 5;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = strokeStyle;
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
drawLines(10, lineColor);



function getMousePosition(event) {

    var rect = canvas.getBoundingClientRect();

    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }

}

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
