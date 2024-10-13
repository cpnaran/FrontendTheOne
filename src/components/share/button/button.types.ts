import { ButtonType } from "antd/es/button";
import { SizeType } from "antd/es/config-provider/SizeContext";
import {  ReactNode } from "react";

  export interface  ButtonProps {
  id?: string | null;
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  htmlType?: "button" | "submit" | "reset";
  onClick?:  () => void;
  children?: ReactNode;
  size?: SizeType;
  block:boolean
}