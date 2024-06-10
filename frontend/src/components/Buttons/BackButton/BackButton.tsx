import { Button } from "./style";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = (props: BackButtonProps) => (
  <Button onClick={props.onClick}>Voltar</Button>
);

export default BackButton;
