import { AttributeProps } from '../types';
import {
  commandErrorId,
  commandFormId,
  commandInputId,
  robotId,
  submitButtonId,
} from '../utils/constants';
import initialPosition from '../state/initial';
import robotImgUrl from '../assets/robot.png';

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
  { attribute: 'autocomplete', setAs: 'off'},
];

export const commandSubmitButtonAttributes: Array<AttributeProps> = [
  { attribute: 'class', setAs: 'submit-button' },
  { attribute: 'id', setAs: submitButtonId },
  { attribute: 'type', setAs: 'submit' },
];

export const errorMessageAttributes: Array<AttributeProps> = [
  { attribute: 'id', setAs: commandErrorId },
];

export const robotAttributes: Array<AttributeProps> = [
  { attribute: 'alt', setAs: 'robot' },
  { attribute: 'src', setAs: robotImgUrl },
  { attribute: 'height', setAs: '40px' },
  { attribute: 'id', setAs: robotId },

  { attribute: 'robotPosition', setAs: JSON.stringify(initialPosition)}
];
