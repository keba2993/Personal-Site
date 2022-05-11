// Kevin Barone

/**
 * @overview [IMPORTANT]
 *
 * You are free to create any number of helper function you want.
 * We know the problem could be searched online, and we are aware of those
 * solutions. So please sight sources if you took help from any online resource.
 */

/**
 * @var {object} table_ids IDs for all the table elements.
 *
 * You get the cell element just by using document.getElementById("A1")
 */
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];

/**
 * @var {object} board_state An array to store the state to the tictactoe board.
 *
 * An integer array of length 9 that represents the tic tac toe board.
 * When a move is made (Example player 1 (who is X) move at Cell 'A1' --- The
 * board_state[0] will be made 1 )
 * Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2]
 * will be made 0 )
 * We store the move of player 1 as '1' and player 2 as '0'. So after the above
 * two moves the state should look like
 * [1, -1, 0, -1, -1, -1, -1, -1, -1]
 */
var board_state = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

/**
 * @var {bool} started A flag to keep track of the status of the game
 *
 * false means the game is not started. The default value is set to false
 */
var started = false;

/**
 * @var {number} turn A variable to keep track of each players turn. Since the
 * game always starts with player 1 - The default value is set to `1`
 * 1 means player_1
 * 0 means player_0
 */
var turn = 1;

/**
 * A method for checking if a string is empty
 *
 * @param {string} _str - Note the type is not checked in the implementation
 * @returns {boolean} The methods returns true is the _str is null or it has a
 * length of 0, otherwise, the methods returns false
 */
function isEmpty(_str) {
  return !_str || 0 === _str.length;
}

/**
 *
 * @returns {int} This returns the turn variable. Please note that
 * turn = 1 is for player_1 and
 * turn = 0 is for player_2
 */
function whose_move() {
  return this.turn;
}

/**
 * This methods toggles the 'turn' variable.
 *
 * if the turn is set to 1 it will make it 0
 * if the turn is set to 0 it will make it 1
 */
function toggle_move() {
  this.turn = !this.turn;
}

/**
 * @func game_started Gets the value of the 'started' flag.
 *
 * The method returns the value of the 'started' flag. When the game has not
 * started the flag is set to false. As soon as the game
 * starts the flag must be set to true. Once the game has finished or user has
 * clicked on reset_play the flag must be set to false.
 *
 * @returns {boolean} The value of the started flag
 * true means the game has started
 * false means the game has not started
 */
function game_started() {
  return this.started;
}

/**
 * @func begin_play
 * @todo Rule 1: This is the first method you'll implement.
 * This method is called when the Begin Play button is clicked.
 *
 * The method should do all the validations as stated in rule 1.
 * 1. Verify if the player names are empty or not. Raise an alert if they are
 *    empty.
 * 2. If the field are empty don't start the game. This just means the function
 *    will return and do nothing. The 'started' flag will not be modified.
 * 3. If all verification is successful, disable the name fields and update the
 *    player moves as shown in the image.
 * 4. If all verification is successful, update the turn information on the
 *    page. (See the source code and image). And set the started flag to true.
 *    (this will help you track at any instant if the game is in start state or
 *    not.)
 * 5. Once game has started, Handle multiple clicks on begin play.
 */
function begin_play() 
{
  let p1 = document.getElementById("player1_id");
  let p2 = document.getElementById("player2_id");

  if (game_started() == true)
  {
    alert("Already started. Please Reset Play to start again.");
    return;
  }

  if (isEmpty(p1.value) || isEmpty(p2.value))
  {
    alert("Two player game, both of the fields are mandatory.");
  }
  else
  {
    p1.disabled = true;
    p2.disabled = true;
    p1.value = p1.value + " (x)";
    p2.value = p2.value + " (O)";

    document.getElementById("turn_info").innerHTML = "Turn for: <b>X</b>"; 
    this.started = true;
  }
}

/**
 * @func reset_play
 * @todo - Rule 2: This is the second method you'll implement.
 * This method is called when the Reset Play button is clicked.
 *
 * The method should do all the things as stated in rule 2.
 * 1. The reset play button should reset the whole game.(At any time when reset
 *    is clicked - All the three text boxes should be cleared and Turn should
 *    be set to the default message.)
 * 2. The text boxes for entering name should be enabled back.
 * 3. The Tic Tac Toe Grid should be set to its default entries.
 * 4. Clicking reset play again and again shall have the same effect.(or no
 *    effect when clicked multiple times). Remember to set the started flag as
 *    false
 */
function reset_play()
{
  let p1 = document.getElementById("player1_id");
  let p2 = document.getElementById("player2_id");

  p1.value = "";
  p1.disabled = false;
  p2.value = "";
  p2.disabled = false;

  document.getElementById("turn_info").innerHTML = "Game has not begun."; 
  this.started = false;

  document.getElementById("move_text_id").value = "";
  this.turn = 1;
  
  // Reset Board
  for (let i = 0; i < 9; i++)
  {
    document.getElementById(table_ids[i]).innerHTML = table_ids[i];
    board_state[i] = -1;
  }
}

/**
 * @func play
 * @todo - Rule 3: This is the last method you'll implement.
 * This method is called every time a move has been player( Play button was
 * clicked).
 *
 * The method should do all the things as stated in rule 2.
 * 1. The moves should be validated can only be these ["A1", "A2", "A3", "B1",
 *    "B2", "B3", "C1", "C2", "C3"]
 * 2. Invalid moves should be reported by an alert message.(You are encouraged
 *    to use Modal which you learned in HW1 - Usage is not mandatory.)
 * 3. If the move is a valid move, the grid should be updated with the correct
 *    move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not
 *    zero!)) - The turn information should also be updated
 *    HINT: Use the turn variable to figure out who is currently playing. Use
 *    to toggle method to change moves.
 * 4. A move should always be a valid move. (Example: If say a move was made in
 *    already filled cell, it should be invalidated with an alert.)
 * 5. If the game has not started, clicking on <b>Play</b> should give an alert
 *    "The game has not started."
 * 6. After any move, the state of the table should be validated.(see the
 *    document attached in the homework) If the there is winner - Show it in an
 *    alert message - (Ex - Winner is X or O) - Displaying name is not
 *    important.
 * 7. The game should reset itself once a winner is determined.
 * 8. After all the moves have exhausted, you're not required to display any
 *    message. (It should be obvious to Reset play.)
 */
function play() 
{
  if (game_started() == false)
  {
    alert("The game has not started.");
    return;
  }

  let valid = false;
  let move = "";
  let index = 0;
  for (let i = 0; i < 9; i++)
  {
    if (table_ids[i] == document.getElementById("move_text_id").value)
    {
      if (board_state[i] == -1)
      {
        valid = true;
        move = table_ids[i];
        index = i;
      }
    }
  }

  if (valid)
  {
    if (whose_move() == 1)
    {
      document.getElementById(move).innerHTML = "<b>X</b>";
      document.getElementById("turn_info").innerHTML = "Turn for: <b>O</b>";
      this.turn = 0;
      board_state[index] = 1;
    }
    else
    {
      document.getElementById(move).innerHTML = "<b>O</b>";
      document.getElementById("turn_info").innerHTML = "Turn for: <b>X</b>";
      this.turn = 1;
      board_state[index] = 0;
    }

    document.getElementById("move_text_id").value = "";
    let winner = validateWinner();

    if (winner == 1)
    {
      alert("Winner is X!");
      reset_play();
    }
    else if (winner == 0)
    {
      alert("Winner is O!");
      reset_play();
    }
  }
  else
  {
    alert("Invalid Move!");
  }
}

function validateWinner()
{
  for (let i = 0; i < 7; i++)
  {
    if (i == 0 && board_state[i] !== -1)
    {
      if ((board_state[i] == board_state[i + 1] && board_state[i + 1] == board_state[i + 2]) || (board_state[i] == board_state[i + 3] && board_state[i + 3] == board_state[i + 6]) || (board_state[i] == board_state[i + 4] && board_state[i + 4] == board_state[i + 8]))
      {
        return board_state[i];
      }
    }
    else if (i == 1 && board_state[i] !== -1)
    {
      if ((board_state[i] == board_state[i + 3] && board_state[i + 3] == board_state[i + 6]))
      {
        return board_state[i];
      }
    }
    else if (i == 2 && board_state[i] !== -1)
    {
      if ((board_state[i] == board_state[i + 2] && board_state[i + 2] == board_state[i + 4]) || (board_state[i] == board_state[i + 3] && board_state[i + 3] == board_state[i + 6]))
      {
        return board_state[i];
      }
    }
    else if (i == 3 && board_state[i] !== -1)
    {
      if ((board_state[i] == board_state[i + 1] && board_state[i + 1] == board_state[i + 2]))
      {
        return board_state[i];
      }
    }
    else if (i == 6 && board_state[i] !== -1)
    {
      if ((board_state[i] == board_state[i + 1] && board_state[i + 1] == board_state[i + 2]))
      {
        return board_state[i];
      }
    }
  }

  return -1;
}

/**
 * Do not change this method.
 */
function moveEnter(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    play();
  }
}
