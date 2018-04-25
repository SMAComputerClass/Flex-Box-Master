// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

            var startButton = document.getElementById("startButton");

      startButton.addEventListener('click', function(e)
      {
        createBoard();
      });  // end logoff button listener

      function createBoard()
      {
          // get the board
          var myBoard = document.getElementById("board");
          var boardSize = document.getElementById("boardSize").value;
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
          var squares = document.querySelectorAll('.square');

          for (i=0; i< squares.length; i++)
          {
            squares[i].style.width = squareSize + "px";
            squares[i].style.height = squareSize + "px";
          }

      }

// --- Click event on a board, but the actual event is on a square
      board.addEventListener('click', function(e)
      {
          // increase square number by 1
          e.target.innerHTML++;

          // get squares data
          var squares = document.querySelectorAll('.square');

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
            squares[current].style.backgroundColor = "green";

            for (i=0; i< squares.length; i++)
            {
                if (i != current)
                {
                  squares[i].style.backgroundColor = "white";
                }
            }
          }
      });  // end of the board eventlistener
