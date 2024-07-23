import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { employeeCreationDTO } from "./employee.model";
import { urlEmployees } from "@/endpoints";
import EmployeeForm from "./EmployeeForm";
import DisplayErrors from "../utils/DisplayError";

export default function CreateEmployee() {
  //history useHistory is not availble to dom6 new is useNavigate
  const history = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(employee: employeeCreationDTO) {
    try {
      await axios.post(urlEmployees, employee);
      history("/employees");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error && error.response) {
        setErrors(error.response.data);
      }
    }
  }
  return (
    <>
      <DisplayErrors errors={errors} />
      <EmployeeForm
        model={{ name: "", position: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      />
    </>
  );
}
