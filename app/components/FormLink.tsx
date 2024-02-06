type FormLinkProps = {
  id: string;
  name: string;
};

export default function FormLink(props: FormLinkProps) {
  return <div>{props.name}</div>;
}
