import { validCommands, validDirections } from './constants';

const errors: Record<string, string> = {
  required: 'Please enter a command',
  invalidFormat: 'Command format is not valid',
  invalidCommand: 'Command type is not valid'
}

const checkFormat = (input: string): void => {
  const placeRegex = /^place\(.+\)$/;
  const cmdRegex = /^\w+\(\)$/;

  if (!((placeRegex).test(input)||(cmdRegex).test(input))) {
    throw errors.invalidFormat;
  };
};

const checkCommand = (input: string): void => {
  if (!validCommands.has(input)) throw errors.invalidCommand;
}

export const initialValidate = (target: HTMLInputElement): string | undefined => {
  const { value: input } = target;
  if (!input) return errors.required;

  const formattedInput = input.toLowerCase();

  try {
    checkFormat(formattedInput);

    const command = formattedInput.split('(')[0];
    checkCommand(command);
  } catch (error) {
    return error as string;
  }
}