import { Button } from "antd";
import { ButtonProps } from "./button.types";

const CustomsButton = ({
  id = null,
  className = "",
  disabled = false,
  type = "primary",
  htmlType = "button",
  onClick = () => {},
  children = null,
  size = "middle",
  block = false,
}: ButtonProps) => {
  return (
    <Button
      className={className}
      disabled={disabled}
      type={type}
      htmlType={htmlType}
      onClick={onClick}
      size={size}
      block={block}
    >
      {children}
    </Button>
  );
};

export default CustomsButton;
