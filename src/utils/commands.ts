import { robotImage } from "../elements/elements";
import { Position } from "../types"
import { robotId } from "./constants";

export const place = (
  { x, y, facing: direction }: Position
) => {
  const rows = document.querySelectorAll('.row');

  const adjustedX = x - 1;
  const adjustedY = 5 - y;

  const cell = rows[adjustedY].children.item(adjustedX);

  if (cell) cell.appendChild(robotImage);
  robotImage.style.transform = 'unset';

  switch (true) {
    case direction === 'north':
      robotImage.style.transform = 'rotate(0deg)';
      break;
    case direction === 'south':
      robotImage.style.transform = 'rotate(180deg)';
      break;
    case direction === 'west':
      robotImage.style.transform = 'rotate(270deg)';
      break;
    case direction === 'east':
      robotImage.style.transform = 'rotate(90deg)';
      break;
    default:
      return null;
  }
};

export const rotate = (leftOrRight: 'left()' | 'right()') => {
  const robot = document.getElementById(robotId);
  if (!robot || (leftOrRight !== 'left()' && leftOrRight !== 'right()')) return;
  
  const currentRotation = robot.style.transform.match(/\d+/);
  const rotationValue = currentRotation ? +currentRotation[0] : 0;

  if (leftOrRight === 'left()') {
    robot.style.transform = `rotate(${rotationValue - 90}deg)`;
  }
  if (leftOrRight === 'right()') {
    robot.style.transform = `rotate(${rotationValue + 90}deg)`;
  }
}
