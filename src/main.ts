import { bulkAppendById, createGrid } from './utils/helper';
import { mainId, commandFormId, commandInputId } from './utils/constants';
import { formLayer, mainLayer } from './elements/layers';
import { formatPlaceCommands } from './utils/helper';
import { place } from './utils/commands';

bulkAppendById(mainId, mainLayer);
bulkAppendById(commandFormId, formLayer);
createGrid();

const commandForm = document.getElementById(commandFormId);
const commandInput = document.getElementById(commandInputId) as HTMLInputElement;

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (commandInput && commandInput?.value) {
    const position = formatPlaceCommands(commandInput.value);
    position ? place(position) : null;
  };
};

commandForm?.addEventListener('submit', handleSubmit);
