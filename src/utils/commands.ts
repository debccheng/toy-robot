import { robotImage } from "../elements/elements";
import { Position } from "../types"

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
      robotImage.style.transform = 'unset';
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
