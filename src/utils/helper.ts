import { AttributeProps } from '../types';
import { grid } from './config';
import { mainId, gridId } from './constants';

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
