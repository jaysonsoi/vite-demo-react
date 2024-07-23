import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustButton from "./CustButton";
import customConfirm from "../utils/customConfirm";
import GenericList from "../forms/GenericList";
import { Table, TableCaption } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const [entities, setEntities] = useState<T[]>();

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadData() {
    axios.get(props.url).then((response: AxiosResponse<T[]>) => {
      setEntities(response.data);
    });
  }

  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error && error.response) {
        console.error(error.response.data);
      }
    }
  }

  const buttons = (editUrl: string, id: number) => (
    <>
      <Button variant={"default"} asChild>
        <Link className="btn btn-success" to={editUrl}>
          Edit
        </Link>
      </Button>

      <CustButton
        className="btn btn-danger"
        onClick={() => customConfirm(() => deleteEntity(id))}
      >
        Delete
      </CustButton>
    </>
  );

  return (
    <>
      <TableCaption>List of {props.title}.</TableCaption>
      <Button variant={"default"} asChild>
        <Link to={props.createUrl}>Create {props.entityName}</Link>
      </Button>

      <GenericList list={entities}>
        <Table>{props.children(entities!, buttons)}</Table>
      </GenericList>
    </>
  );
}

interface indexEntityProps<T> {
  url: string;
  title: string;
  createUrl: string;
  entityName: string;
  children(
    entities: T[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}
