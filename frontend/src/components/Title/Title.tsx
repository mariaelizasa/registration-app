import { StyledTitle } from "./style";

interface TitleProps {
  name: string;
}

function Title(props: TitleProps) {
  return <StyledTitle>{props.name}</StyledTitle>;
}

export default Title;
