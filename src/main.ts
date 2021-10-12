import { bulkAppendById, createGrid } from './utils/helper';
import {
  commandErrorId,
  commandFormId,
  commandInputId,
  mainId,
} from './utils/constants';
import { formLayer, mainLayer } from './elements/layers';
import { formatPlaceCommands, formatUserInput } from './utils/helper';
import { place, report, rotate } from './utils/commands';
import { validate } from './utils/validation';

bulkAppendById(mainId, mainLayer);
bulkAppendById(commandFormId, formLayer);
createGrid();

const commandForm = document.getElementById(commandFormId);
const commandInput = document.getElementById(commandInputId) as HTMLInputElement;
const commandErrorLog = document.getElementById(commandErrorId);

const handleKeyUp = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (target) {
    const errorLog = validate(target);
    if (errorLog && commandErrorLog) {
      commandErrorLog.textContent = errorLog;
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

    if (userInput === 'left()' || userInput === 'right()') {
      rotate(userInput);
      return;
    }

    if (userInput === 'report()') {
      report();
      return;
    }

    const position = formatPlaceCommands(userInput);
    position ? place(position) : null;
  };
};

commandForm?.addEventListener('submit', handleSubmit);
commandInput?.addEventListener('keyup', handleKeyUp);
