export type AttributeProps = {
  attribute: string;
  setAs: string;
};

export type Direction = 'north' | 'south' | 'east' | 'west';

export type Command = 'place' | 'move' | 'left' | 'right' | 'report';

export type TurnDirection = `${Extract<Command, 'left' | 'right'>}()`;

export interface Position {
  x: number
  y: number
  facing: Direction;
}

export interface RobotPosition extends Position {
  rotation: number;
}

export interface RobotElement extends HTMLElement {
  robotPosition?: RobotPosition;
}
