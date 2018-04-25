// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

      var board = document.getElementById("board");  // only 1 board, use ID

// --- Click event on a board, but the actual event is on a square
      board.addEventListener('click', function(e)
      {
          // increase square number by 1
          e.target.innerHTML++;

          // get squares data
          var squares = document.querySelectorAll('.square');

          var current = e.target.id;  // store my square #
          var i=0;                    // loop counter
          var iAmHighest = true;      // temporary bool variable

          while ((iAmHighest == true) && (i < squares.length))
          {
              if (i != current)
              {
                if (squares[i].innerHTML >= squares[current].innerHTML)
                  iAmHighest = false;
                else
                  i++;
              }
              else
                i++;
          }

          if (iAmHighest == true)
          {
            squares[current].style.backgroundColor = "green";
          }
      });  // end of the board eventlistener
