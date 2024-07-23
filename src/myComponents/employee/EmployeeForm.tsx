import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, Formik, FormikHelpers } from "formik";
import { employeeCreationDTO } from "./employee.model";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import CustButton from "../forms/CustButton";

export default function EmployeeForm(props: employeeFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .max(50, "Max length is 50 characters"),
      })}
    >
      {(formikProps) => (
        <Form>
          <Card>
            <CardHeader>
              <CardTitle>Create</CardTitle>
              <CardDescription>Create a new employee</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <TextField field="name" displayName="Name" />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <TextField field="position" displayName="Position" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <CustButton disabled={formikProps.isSubmitting} type="submit">
                Save Changes
              </CustButton>
            </CardFooter>
          </Card>
        </Form>
      )}
    </Formik>
  );
}

interface employeeFormProps {
  model: employeeCreationDTO;
  onSubmit(
    values: employeeCreationDTO,
    action: FormikHelpers<employeeCreationDTO>
  ): void;
}
