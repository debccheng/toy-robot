import { bulkAppendById, createGrid } from './utils/helper';
import { mainId, commandFormId } from './utils/constants';
import { formLayer, mainLayer } from './elements/layers';

bulkAppendById(mainId, mainLayer);
bulkAppendById(commandFormId, formLayer);
createGrid();