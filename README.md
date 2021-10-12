## Toy Robot
Task details are from [ZONE](https://zone.github.io/frontend/toy-robot).\
I have decided to use **vanilla JS/TS**.

**What**
* A toy robot on a table top
* A grid of 5 x 5 units, there are no obstructions.
* Commands that you can issue to your robot, allowing it to roam around the table top.

**Task**
* Create an app that allows commands to be issued to the robot.
* The robot should be prevented from failing off the table top to its destruction.
* A failed command should not stop the app, valid commands should be allowed.
* The application should discard all commands until a valid place() command has been executed.

**Inputs**
* `place(x, y, facing)`
    * x and y are integers that relate to a location on the grid. Values that are outside the boundary of the grid should not be allowed.
    * facing is a string referencing the direction the robot is facing. Values NORTH, SOUTH, EAST or WEST are allowed.
* `move()`
    * Moves the robot 1 grid unit in the direction it is facing unless that movement will cause the robot to fall off the grid.
* `left()`
    * Rotate the robot 90° counterclockwise.
* `right()`
    * Rotate the robot 90° clockwise.
* `report()`
    * Outputs the robot's current grid location and facing direction.

---
**Log**

*11/10/2021:*
* Set custom attribute to robot element for setting position, but might need to look more closely into this and revise?
* Set initial values for position
* Allow updates to position after calling `place(x, y, facing)`, `left()`, and `right()`

*11/10/2021:*
* Draft `left()` and `right()`
* Complete draft validation
* Add CodeQL via github

*10/10/2021:*
* Setup environment - webpack, tsconfig, package.json
* Add helper functions for DOM element creation and manipulation
* Initialise grid
* Draft `place(x, y, facing)` and validation
