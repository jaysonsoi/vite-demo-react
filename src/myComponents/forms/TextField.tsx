import { Input } from "@/components/ui/input";
import { ErrorMessage, useField } from "formik";

export default function TextField(props: textFieldProps) {
  const [field] = useField(props.field);
  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayName}</label>
      <Input id={props.field} type="text" {...field} />
      <ErrorMessage name={props.field}>
        {(msg) => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}

interface textFieldProps {
  field: string;
  displayName: string;
}
