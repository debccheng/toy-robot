import { AttributeProps, Position, Direction } from '../types';
import { grid } from './config';
import { mainId, gridId } from './constants';

// #region - Grid creation in the DOM
export const createGrid = () => {
  const gridContainer = document.createElement('div');
  gridContainer.id = gridId;

  document.getElementById(mainId)?.appendChild(gridContainer);

  grid.forEach((row, index) => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'row';
    rowDiv.id = `row-${index + 1}`;
    document.getElementById('grid')?.appendChild(rowDiv);

    row.forEach(() => {
      const cellDiv = document.createElement('div');
      cellDiv.className = 'cell';
      document.querySelectorAll('.row')[index]?.appendChild(cellDiv);
    });
  });
};
// #endregion

// #region - Helpers for creating and appending DOM elements
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
// Format Place(x, y, direction)
export const formatPlaceCommands = (
  input: string
): Position | null => {
  const formattedInput = input.toLowerCase();
  const index = input.indexOf(')');
  const placeCommands = formattedInput
    .substring(6, index) // x, y, direction
    .replace(/\s*/g, '')
    .split(',');
  
  if (placeCommands.length !== 3 || !placeCommands[2]) {
    console.warn(
      `Expected 3 args: [x,y,direction] but instead got ${placeCommands}`
    );
    return null;
  }

  const position = {
    x: +placeCommands[0],
    y: +placeCommands[1],
    facing: placeCommands[2] as Direction
  };

  return position;
};
// #endregion
