interface TitleProps {
  name: string;
}

function Title(props: TitleProps) {
  return <h2>{props.name}</h2>;
}

export default Title;
