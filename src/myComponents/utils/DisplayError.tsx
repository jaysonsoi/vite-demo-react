export default function DisplayErrors(props: displayErrorsProps) {
  const style = { color: "red" };
  return (
    <>
      {props.errors ? (
        <ul>
          {props.errors.map((error, index) => (
            <li key={index} style={style}>
              {error}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
interface displayErrorsProps {
  errors?: string[];
}
