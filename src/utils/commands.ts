import { robot } from "../elements/elements";
import updatePosition from "../state/update";
import { Position, RobotElement, RobotPosition, TurnDirection } from "../types"
import { positionReportId, robotId } from "./constants";
import { getNewDirection, isObjEmpty } from "./helper";

export const place = (
  { x, y, facing: direction }: Position
): void => {
  const rows = document.querySelectorAll('.row');

  const adjustedX = x - 1;
  const adjustedY = 5 - y;

  const cell = rows[adjustedY].children.item(adjustedX);

  switch (true) {
    case direction === 'north':
      robot.style.transform = 'rotate(0deg)';
      updatePosition({
        x: x,
        y: y,
        facing: direction,
        rotation: 0,
      }, robot);
      break;
    case direction === 'south':
      robot.style.transform = 'rotate(180deg)';
      updatePosition({
        x: x,
        y: y,
        facing: direction,
        rotation: 180,
      }, robot);
      break;
    case direction === 'west':
      robot.style.transform = 'rotate(270deg)';
      updatePosition({
        x: x,
        y: y,
        facing: direction,
        rotation: 270,
      }, robot);
      break;
    case direction === 'east':
      robot.style.transform = 'rotate(90deg)';
      updatePosition({
        x: x,
        y: y,
        facing: direction,
        rotation: 90,
      }, robot);
      break;
    default:
      return;
  }

  if (cell) cell.appendChild(robot);
};

export const rotate = (leftOrRight: TurnDirection): void => {
  const robot: RobotElement | null = document.getElementById(robotId);
  if (!robot || (leftOrRight !== 'left()' && leftOrRight !== 'right()')) return;

  const robotAttribute = robot.getAttribute('robotPosition');
  const prevPosition: RobotPosition = Boolean(robotAttribute)
  ? JSON.parse(robotAttribute as string)
  : null;

  if (!prevPosition) return;
  const { rotation: prevRotation, facing: prevDirection } = prevPosition;

  if (leftOrRight === 'left()') {
    robot.style.transform = `rotate(${prevRotation - 90}deg)`;
    updatePosition(
      {
        rotation: prevRotation - 90,
        facing: getNewDirection(prevDirection, leftOrRight)
      },
      robot
    );
  }
  if (leftOrRight === 'right()') {
    robot.style.transform = `rotate(${prevRotation + 90}deg)`;
    updatePosition(
      {
        rotation: prevRotation + 90,
        facing: getNewDirection(prevDirection, leftOrRight)
      },
      robot
    );
  }
}

export const report = (): void => {
  const robot: RobotElement | null = document.getElementById(robotId);
  const positionSection = document.getElementById(positionReportId);
  if (!robot || !positionSection) return;

  const robotAttribute = robot.getAttribute('robotPosition');
  const position: RobotPosition = robotAttribute ? JSON.parse(robotAttribute) : null;

  if (!isObjEmpty(position)) {
    const { x, y, facing: direction } = position;
    positionSection.innerText = `
      Coordinates: (${x},${y})\n
      Facing: ${direction}
    `;
  }
}

export const move = (): void => {
  const robot: RobotElement | null = document.getElementById(robotId);
  if (!robot) return;

  const robotAttribute = robot.getAttribute('robotPosition');
  const position: RobotPosition = robotAttribute ? JSON.parse(robotAttribute) : null;

  const { x, y, facing: direction } = position;
  const adjustedX = x - 1;
  const adjustedY = 5 - y;

  const rows = document.querySelectorAll('.row');

  switch (true) {
    case direction === 'north':
      updatePosition({
        y: (y + 1) <= 5 ? y + 1 : y,
      }, robot);
      const northCell = rows[adjustedY - 1].children.item(adjustedX);
      if (northCell) northCell.appendChild(robot);
      break;
    case direction === 'south':
      updatePosition({
        y: (y - 1) > 0 ? y - 1 : y,
      }, robot);
      const southCell = rows[adjustedY + 1].children.item(adjustedX);
      if (southCell) southCell.appendChild(robot);
      break;
    case direction === 'west':
      updatePosition({
        x: (x - 1) > 0 ? x - 1 : x,
      }, robot);
      const westCell = rows[adjustedY].children.item(adjustedX - 1);
      if (westCell) westCell.appendChild(robot);
      break;
    case direction === 'east':
      updatePosition({
        x: (x + 1) <= 5 ? x + 1 : x,
      }, robot);
      const eastCell = rows[adjustedY].children.item(adjustedX + 1);
      if (eastCell) eastCell.appendChild(robot);
      break;
    default:
      return
  }
}
