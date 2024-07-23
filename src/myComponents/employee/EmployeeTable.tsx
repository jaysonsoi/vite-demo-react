import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Employee {
  id: number;
  name: string;
  position: string;
}

interface EmployeeTableProps {
  employees: Employee[];
}

export default function EmployeeTable({ employees }: EmployeeTableProps) {
  return (
    <>
      <Table>
        <TableCaption>List of Employees.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">Id</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Position</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id}>
              <TableCell className="text-right">{employee.id}</TableCell>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
