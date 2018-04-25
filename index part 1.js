// Put your JavaScript in this file.
'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

      var board = document.getElementById("board");  // only 1 board, use ID

// --- Click event on a board, but the actual event is on a square
      board.addEventListener('click', function(e)
      {
          e.target.innerHTML++;

          // e.target.innerHTML = "X";   // setter

          // alert (e.target.innerHTML);

          var squares = document.querySelectorAll('.square');

          // alert (squares.length);

          // console.log(squares);
          // alert(squares[0].innerHTML);  // getter

          //alert(e.target.id);

          var highest = 0;
          var current = e.target.id;
          // alert (current);
          var i;

          for (i=0; i< squares.length; i++)
          {
              if (squares[i].innerHTML > squares[highest].innerHTML)
              {
                highest = i;
              }
          }

          if (squares[current].innerHTML >= squares[highest].innerHTML)
            squares[current].style.backgroundColor = "green";
        //  else
          //  squares[highest].style.backgroundColor = "green";



      });  // end of the board eventlistener
