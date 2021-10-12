import { RobotElement, RobotPosition } from "../types";
import { isObjEmpty } from "../utils/helper";

const updatePosition = (
  newPosition: Partial<RobotPosition>,
  robot: RobotElement
): void => {
  const robotAttribute = robot.getAttribute('robotPosition');
  const prevPosition: RobotPosition = Boolean(robotAttribute)
    ? JSON.parse(robotAttribute as string)
    : null;

  if (!isObjEmpty(prevPosition)) {
    const updatedPosition = {
      ...prevPosition,
      x: newPosition?.x ?? prevPosition.x,
      y: newPosition?.y ?? prevPosition.y,
      facing: newPosition?.facing ?? prevPosition.facing,
      rotation: newPosition?.rotation ?? prevPosition.rotation,
    }
    robot.setAttribute('robotPosition', JSON.stringify(updatedPosition));
  }
};

export default updatePosition;
