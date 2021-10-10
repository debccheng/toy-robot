import { AttributeProps } from '../types';
import {
  commandFormId,
  commandInputId,
} from '../utils/constants';

export const titleAttributes: Array<AttributeProps> = [
  { attribute: 'class', setAs: 'main-title' },
];

export const commandFormAttributes: Array<AttributeProps> = [
  { attribute: 'class', setAs: 'form' },
  { attribute: 'id', setAs: commandFormId },
];

export const commandLabelAttributes: Array<AttributeProps> = [
  { attribute: 'for', setAs: 'command' },
  { attribute: 'class', setAs: 'input-label' },
];

export const commandInputAttributes: Array<AttributeProps> = [
  { attribute: 'id', setAs: commandInputId },
  { attribute: 'name', setAs: 'command' },
  { attribute: 'type', setAs: 'text' },
];

export const commandSubmitButtonAttributes: Array<AttributeProps> = [
  { attribute: 'class', setAs: 'submit-button' },
  { attribute: 'type', setAs: 'submit' },
];
