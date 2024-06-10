import { Button, ButtonContainer } from "./style";

interface ButtonProps {
  size?: "small" | "normal";
  alone?: boolean;
  onClick: () => void; 
}
const NextButton = (props: ButtonProps) => (
  <ButtonContainer alone={props.alone}>
    <Button size={props.size} onClick={props.onClick}>Continuar</Button>
  </ButtonContainer>
);

export default NextButton;
