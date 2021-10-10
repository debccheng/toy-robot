// Initialises a 5 * 5 array
export const grid: Array<Array<any>> = [...new Array(5)]
  .map(() => ([...new Array(5)].map(() => null)));
