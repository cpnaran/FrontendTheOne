export interface OptionState {
  error: string | null;
  loading: boolean;
  optionPackage: OptionPackageState[];
  optionLicense: OptionLicenseState[];
}

export interface OptionPackageState {
  id: string;
  package: string;
  amount: number;
  days: number;
  packageType: PACKAGE_TYPE;
}

export interface OptionLicenseState {
  id: string;
  userId: string;
  license: string;
  paymentState: string;
}

export interface OptionLicenseRequest {
  userId: string;
}

export enum PACKAGE_TYPE {
  STANDARD = "STANDARD",
  PROMOTION = "PROMOTION",
}
