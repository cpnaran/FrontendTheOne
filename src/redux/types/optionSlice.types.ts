export interface OptionState {
  error:string|null;
  loading:boolean
  optionPackage:OptionPackageState[]
  optionLicense:OptionLicenseState[]
}


export interface OptionPackageState{
   id:string;
   package:string;
   amount:number;
   days:number;
}




export interface OptionLicenseState{
   id:string;
   userId:string;
   license:string;
   paymentState:string;
}


export interface OptionLicenseRequest {
  userId:string;
}
