import { ReactElement } from "react";
import GenericLoading from "../forms/GenericLoading";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <GenericLoading />;
  } else if (props.list.landingPageDTO === 0) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    }
    return <>There are no elements to display</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  list: any;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
  children: ReactElement;
}
