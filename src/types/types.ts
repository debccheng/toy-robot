export type AttributeProps = {
  attribute: string;
  setAs: string;
};

type Coordinates = string | number;

type Direction = 'north' | 'south' | 'east' | 'west';

export interface Position {
  x: Coordinates;
  y: Coordinates;
  facing: Direction;
}
