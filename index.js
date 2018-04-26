// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

      // var SPACE_BAR_KEY = 32;
      var ARROW_LEFT = 37;
      var ARROW_UP = 38;
      var ARROW_RIGHT = 39;
      var ARROW_DOWN = 40;
      var currentSquare = 0;
      var squares;
      var boardSize;

      var startButton = document.getElementById("startButton");

      startButton.addEventListener('click', function(e)
      {
        createBoard();
      });  // end logoff button listener

      function createBoard()
      {
          // get the board
          var myBoard = document.getElementById("board");
          boardSize = Number(document.getElementById("boardSize").value);
          var squareSize = document.getElementById("squareSize").value;

          myBoard.innerHTML = "";

          //  set the width and height styles to the number of pixels
          myBoard.style.width = (boardSize*squareSize) + "px";
          myBoard.style.height = (boardSize*squareSize) + "px";

          console.log ("board width = " + myBoard.style.width);
          console.log ("board height = " + myBoard.style.height);

          var i;
          // Create the squares
          for (i=0;i<boardSize*boardSize;i++)
          {
            // myBoard.innerHTML = myBoard.innerHTML + '<div class="square"></div>';  // no id
            myBoard.innerHTML = myBoard.innerHTML + '<div class="square" id ="' + i + '">0</div>';
            //    <div class="square" id="1">1</div>

          }

          console.log(myBoard.innerHTML);
          // get squares data
          squares = document.querySelectorAll('.square');

          for (i=0; i< squares.length; i++)
          {
            squares[i].style.width = squareSize + "px";
            squares[i].style.height = squareSize + "px";
          }

        squares[currentSquare].style.backgroundColor = "blue";

      }

// --- Click event on a board, but the actual event is on a square
      board.addEventListener('click', function(e)
      {
          // increase square number by 1
          e.target.innerHTML++;

          var current = e.target.id;  // store my square #
          var i=0;                    // loop counter
          var iAmHighest = true;      // Assume I am the highest number before start of check

          while ((iAmHighest == true) && (i < squares.length))
          {
              if (i != current)   // don't check yourself
              {
                if (Number(squares[i].innerHTML) >= Number(squares[current].innerHTML))
                  iAmHighest = false;
                else
                  i++;
              }
              else
                i++;
          }

          if (iAmHighest == true) // only change colors if I am highest
          {
            squares[current].style.backgroundColor = "coral";

            for (i=0; i< squares.length; i++)
            {
                if (i != current)
                {
                  squares[i].style.backgroundColor = "white";
                }
            }
          }
      });  // end of the board eventlistener

// ----------------------------------------------------

      document.onkeydown = checkKey;

      function checkKey(evt) {
        // this line of code was needed due to old browsers, possibly firefox, Nathan had an issue
        evt = evt || window.event;

        //console.log ("Keycode pressed from event: " + evt.keyCode);

        var key = evt.keyCode;


        switch (key) {
          case ARROW_RIGHT:

          if (((currentSquare+1) % boardSize) == 0)
          {
            console.log("Cant move through right wall");
            return;
          }
          else
          {
            currentSquare++;
            squares[currentSquare].style.backgroundColor = "blue";
          }


            // console.log("**************** Right key is pressed **********");
            // console.log("**************** Right key is pressed **********");
            break;
          case ARROW_LEFT:

          if ((currentSquare % boardSize) == 0)
          {
            console.log("Cant move through left wall");
            return;
          }
          else
          {
            currentSquare--;
            squares[currentSquare].style.backgroundColor = "purple";
          }

            // console.log("**************** Left key is pressed **********");
            //console.log("**************** Left key is pressed **********");
            break;
          case ARROW_DOWN:

            currentSquare = currentSquare + boardSize;
            console.log ("boardSize is " + boardSize + " current square is " + currentSquare);

            squares[currentSquare].style.backgroundColor = "ivory";

            // console.log("**************** Down key is pressed **********");
            // console.log("**************** Down key is pressed **********");
            break;
          case ARROW_UP:

            // console.log("**************** Up key is pressed **********");
            // console.log("**************** Up key is pressed **********");
            break;
          default:

            // do nothing
        } // end switch

      }
