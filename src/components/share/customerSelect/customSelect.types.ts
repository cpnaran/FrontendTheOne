import { SelectProps } from "antd/es/select";

export interface CustomSelectProps {
  label?: string;
  name: string;
  placeholder?: string;
  size?: 'large' | 'middle' | 'small';
  className?: string;
  mode?: '"" | "multiple" | "tags"';
  required?: boolean;
  disabled?: boolean;
  options: { value: string; label: string }[]; // Type for options
  tagRender?: SelectProps['tagRender'];
  suffixIcon?: React.ReactNode;
  onChange?: (val: string | string[] ) => void;
}