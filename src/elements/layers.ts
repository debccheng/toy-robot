import {
  commandErrorMessage,
  commandForm,
  commandLabel,
  commandTextInput,
  title,
  submitCommandButton,
  positionReport,
} from './elements';

export const mainLayer = [
  title,
  commandForm,
  positionReport
];

export const formLayer = [
  commandLabel,
  commandErrorMessage,
  commandTextInput,
  submitCommandButton
];