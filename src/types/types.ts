export type AttributeProps = {
  attribute: string;
  setAs: string;
};

export type Direction = 'north' | 'south' | 'east' | 'west';

export interface Position {
  x: number
  y: number
  facing: Direction;
}
