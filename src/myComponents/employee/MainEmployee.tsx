import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IndexEntity from "../forms/IndexEntity";
import { employeeDTO } from "./employee.model";
import { urlEmployees } from "@/endpoints";

export default function MainEmployee() {
  return (
    <>
      <IndexEntity<employeeDTO>
        url={urlEmployees}
        createUrl="create"
        title="Employees"
        entityName="Employees"
      >
        {(employees, buttons) => (
          <>
            <TableHeader>
              <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Task</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees?.map((employee) => (
                <TableRow key={employee.employeeId}>
                  <TableCell>{employee.employeeId}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>
                    {buttons(
                      `edit/${employee.employeeId}`,
                      employee.employeeId
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        )}
      </IndexEntity>
    </>
  );
}
