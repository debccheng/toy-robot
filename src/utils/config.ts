// Creates a 5 * 5 grid
export const grid = [...new Array(5)]
  .map(() => ([...new Array(5)].map(() => null)));
