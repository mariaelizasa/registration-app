import { NextButtonProps } from "../../../@types/ButtonType";
import { Button, ButtonContainer } from "./style";


const NextButton = (props: NextButtonProps) => (
  <ButtonContainer alone={props.alone || false}>
    <Button
      size={props.size}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.title}
    </Button>
  </ButtonContainer>
);

export default NextButton;
