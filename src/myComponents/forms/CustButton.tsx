import { Button } from "@/components/ui/button";

export default function CustButton(props: buttonProps) {
  return (
    <Button
      variant={"default"}
      type={props.type}
      disabled={props.disabled}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onClick?(): void;
  type: "button" | "submit";
  disabled: boolean;
  className: string;
}

CustButton.defaultProps = {
  type: "button",
  disabled: false,
  className: "btn btn-primary",
};
