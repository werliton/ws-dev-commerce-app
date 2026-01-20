import { ReactNode } from "react";
import Typography from "../Typography";

type EmptyMessageProps = {
  children: ReactNode;
};

const EmptyMessage = ({ children }: EmptyMessageProps) => {
  return (
    <div style={{ marginTop: "15px" }}>
      <Typography>{children}</Typography>
    </div>
  );
};

export default EmptyMessage;
