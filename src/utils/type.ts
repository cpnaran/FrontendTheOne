import { FormikErrors } from "formik";

export enum DEVICE_TYPE {
  DESKTOP = "DESKTOP",
  MOBILE = "MOBILE",
  TABLET = "TABLET",
}

export const formatPhoneNumber = (value: string) => {
  // ใช้ Regex เพื่อจัดรูปแบบหมายเลขโทรศัพท์เป็น 3-3-4 หรือ 3-4
  const formattedValue = value.replace(
    /(\d{3})(\d{0,3})(\d{0,4})/,
    (match, p1, p2, p3) => {
      const parts = [p1, p2, p3].filter(Boolean);
      return parts.join("-");
    }
  );
  return formattedValue;
};

export const handleFormatPhoneNumber = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<any>>
) => {
  const value = event.target.value;
  const strippedValue = value.replace(/\D/g, "");
  const formattedValue = formatPhoneNumber(strippedValue);
  const phoneNumberWithoutDash = formattedValue.replace(/-/g, "");
  if (phoneNumberWithoutDash.length <= 10) {
    setFieldValue(event.target.name, formattedValue);
  }
};


export function onChangeFormatPhoneNumber(inputValue: string) {
  inputValue = inputValue.replace(/[^0-9]/g, "");

  // จัดรูปแบบให้เป็น "3-3-4"
  if (inputValue.length > 3) {
    inputValue = inputValue.slice(0, 3) + "-" + inputValue.slice(3);
  }
  if (inputValue.length > 7) {
    inputValue = inputValue.slice(0, 7) + "-" + inputValue.slice(7);
  }
  if (inputValue.length > 12) {
    inputValue = inputValue.slice(0, 12);
  }
  return inputValue;
}


export enum PAGE_TYPE {
  EDIT = "EDIT",
  SUMMIT ="SUMMIT"
}