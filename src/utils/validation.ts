import { robotId, validCommands, validDirections } from './constants';

const errors: Record<string, string> = {
  required: 'Please enter a command',
  invalidCommand: `
    Invalid input. Valid commands: place(x, y, facing), left(), right(), move(), report()
  `,
  invalidPlaceCommand: `
    Expected 3 args: [x, y, facing] for place command
  `,
  invalidXY: `
    Please enter a number for [x, y]
  `,
  outOfBounds: `
    Position out of bounds: value range of 1-5 required for [x, y]
  `,
  invalidDirection: `
    Invalid direction as last arg. Valid directions: north, south, east, west
  `,
  robotNotFound: `
    Please place robot on the grid first with place(x, y, facing)
  `,
};

const checkFormat = (input: string): void => {
  const placeRegex = /^place\(.+\)$/;
  const cmdRegex = /^\w+\(\)$/;

  if (!cmdRegex.test(input) && !placeRegex.test(input)) {
    throw errors.invalidCommand;
  };
};

const checkCommand = (input: string): void => {
  if (!validCommands.has(input)) throw errors.invalidCommand;
};

const checkXYvalid = (coordinate: string): void => {
  if (!(/\d+/).test(coordinate)) throw errors.invalidXY;
};

const checkOutOfBound = (coordinate: string): void => {
  if (+coordinate > 5 || +coordinate < 1) throw errors.outOfBounds;
};

const checkDirection = (direction: string): void => {
  if (!validDirections.has(direction)) throw errors.invalidDirection;
};

const checkRobotIsPlaced = (input: string): void => {
  if (validCommands.has(input) && !(/place/).test(input)) {
    const robot = document.getElementById(robotId);
    if (!robot) throw errors.robotNotFound;
  }
};

export const validate = (target: HTMLInputElement): string | undefined => {
  const { value: input } = target;
  if (!input) return errors.required;

  const lowercaseInput = input.toLowerCase();

  try {
    checkFormat(lowercaseInput);

    const command = lowercaseInput.split('(')[0];
    checkRobotIsPlaced(command);
    checkCommand(command);

    if (command === 'place') {
      const formattedInput = lowercaseInput.replace(/\s/g, '');
      const index = formattedInput.indexOf(')');
      const placeCommands = formattedInput
        .substring(6, index) // x, y, direction
        .split(',');
    
      
      if (placeCommands.length !== 3 || !placeCommands[2]) throw errors.invalidPlaceCommand;

      const [x, y, direction] = placeCommands;
      checkXYvalid(x);
      checkXYvalid(y);

      checkDirection(direction);

      checkOutOfBound(x);
      checkOutOfBound(y);
    }
  } catch (error) {
    return error as string;
  }
};
