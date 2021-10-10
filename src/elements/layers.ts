import {
  commandErrorMessage,
  commandForm,
  commandLabel,
  commandTextInput,
  title,
  submitCommandButton,
} from './elements';

export const mainLayer = [title, commandForm];

export const formLayer = [
  commandLabel,
  commandErrorMessage,
  commandTextInput,
  submitCommandButton
];