import { Button, ButtonContainer } from "./style";

interface ButtonProps {
    size?: 'small' | 'normal';
    alone?: boolean
  }
  
const NextButton = (props: ButtonProps) => (
  <ButtonContainer alone={props.alone}>
    <Button size={props.size}>Continuar</Button>
  </ButtonContainer>
);

export default NextButton;
