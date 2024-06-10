import { BackButtonProps } from "../../../@types/ButtonType";
import { Button } from "./style";

const BackButton = (props: BackButtonProps) => (
  <Button onClick={props.onClick}>Voltar</Button>
);

export default BackButton;
