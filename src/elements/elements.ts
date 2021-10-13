import { RobotElement } from '../types';
import { bulkSetAttributes } from '../utils/helper';
import {
  commandFormAttributes,
  commandInputAttributes,
  commandLabelAttributes,
  commandSubmitButtonAttributes,
  errorMessageAttributes,
  positionReportAttributes,
  robotAttributes,
  titleAttributes,
} from './elementAttributes';

export const title = bulkSetAttributes(
  document.createElement('h1'),
  titleAttributes,
);
title.textContent = 'Toy Robot';

export const commandForm = bulkSetAttributes(
  document.createElement('form'),
  commandFormAttributes,
);

export const commandLabel = bulkSetAttributes(
  document.createElement('label'),
  commandLabelAttributes,
);
commandLabel.textContent = 'Enter your command';

export const commandTextInput = bulkSetAttributes(
  document.createElement('input'),
  commandInputAttributes,
);

export const commandErrorMessage = bulkSetAttributes(
  document.createElement('div'),
  errorMessageAttributes,
);

export const submitCommandButton = bulkSetAttributes(
  document.createElement('button'),
  commandSubmitButtonAttributes,
);
submitCommandButton.textContent = 'go';

export const robot: RobotElement = bulkSetAttributes(
  document.createElement('img'),
  robotAttributes,
);

export const positionReport = bulkSetAttributes(
  document.createElement('section'),
  positionReportAttributes
);

