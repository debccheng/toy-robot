import { AttributeProps, Position, Direction, TurnDirection } from '../types';
import { grid } from './config';
import { mainId, gridId } from './constants';

export const isObjEmpty = (obj: Record<any, any>): boolean => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// #region - Helpers for creating and appending DOM elements
export const createGrid = () => {
  const gridContainer = document.createElement('div');
  gridContainer.id = gridId;

  document.getElementById(mainId)?.appendChild(gridContainer);

  grid.forEach((row, index) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.id = `row-${index + 1}`;
    document.getElementById('grid')?.appendChild(rowDiv);

    row.forEach((_, rowIndex) => {
      const cellDiv = document.createElement('div');
      cellDiv.className = 'cell';
      cellDiv.innerText = `${rowIndex + 1},${5 - index}`
      document.querySelectorAll('.row')[index]?.appendChild(cellDiv);
    });
  });
};

export const bulkSetAttributes = (
  element: HTMLElement,
  attributes: Array<AttributeProps> = [],
): HTMLElement => {
  if (attributes.length === 0) return element;

  attributes.forEach(({ attribute, setAs }) => {
    element.setAttribute(attribute, setAs);
  });
  return element;
};

export const bulkAppendById = (
  parentId: string,
  elementArray: Array<HTMLElement>,
): void => {
  const parent = document.getElementById(parentId);
  if (!parent) return;

  elementArray.forEach((element) => parent.appendChild(element));
};
// #endregion

// #region - Format user input
export const formatUserInput = (input: string): string => {
  return input.toLowerCase().replace(/\s/g, '');
};

// Format command place(x, y, direction)
export const formatPlaceCommands = (
  input: string
): Position | null => {
  const index = input.indexOf(')');
  const placeCommands = input
    .substring(6, index) // x, y, direction
    .split(',');
  
  const position = {
    x: +placeCommands[0],
    y: +placeCommands[1],
    facing: placeCommands[2] as Direction
  };

  return position;
};
// #endregion

// #region - Get new direction after turning let or right
export const getNewDirection = (
  prevDirection: Direction,
  LeftOrRight: TurnDirection
): Direction => {
  const circularDirections: Array<Direction> = ['north', 'east', 'south', 'west'];
  const length = circularDirections.length;
  const index = circularDirections.indexOf(prevDirection);
  const turn = LeftOrRight === 'left()' ? -1 : 1;
  const newIndex = index + turn;

  if (newIndex < 0) return circularDirections[length + newIndex];

  return circularDirections[newIndex];
}
// #endregion
