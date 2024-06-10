import { TitleProps } from "../../@types/TitleType";
import { StyledTitle } from "./style";

function Title(props: TitleProps) {
  return <StyledTitle>{props.name}</StyledTitle>;
}

export default Title;
