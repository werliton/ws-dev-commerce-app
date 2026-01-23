import Button, { ButtonProps } from "../Button";

type IconButtonProps = {
  children: React.ReactNode;
} & ButtonProps;

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <Button {...props} style={{ gap: "0.5rem" }}>
      {children}
    </Button>
  );
};
export default IconButton;
