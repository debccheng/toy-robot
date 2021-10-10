import { bulkAppendById, createGrid } from './utils/helper';
import {
  commandErrorId,
  commandFormId,
  commandInputId,
  mainId,
} from './utils/constants';
import { formLayer, mainLayer } from './elements/layers';
import { formatPlaceCommands, formatUserInput } from './utils/helper';
import { place } from './utils/commands';
import { initialValidate } from './utils/validation';

bulkAppendById(mainId, mainLayer);
bulkAppendById(commandFormId, formLayer);
createGrid();

const commandForm = document.getElementById(commandFormId);
const commandInput = document.getElementById(commandInputId) as HTMLInputElement;
const commandErrorLog = document.getElementById(commandErrorId);

const handleBlur = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target) {
    const errorLog = initialValidate(target);
    if (errorLog && commandErrorLog) {
      commandErrorLog.textContent = errorLog
    } else if (commandErrorLog) {
      commandErrorLog.textContent = '';
    }
  }
}

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (commandErrorLog && commandErrorLog.textContent) return;

  if (commandInput && commandInput?.value) {
    const userInput = formatUserInput(commandInput.value);

    const position = formatPlaceCommands(userInput);
    position ? place(position) : null;
  };
};

commandForm?.addEventListener('submit', handleSubmit);
commandInput?.addEventListener('blur', handleBlur);
