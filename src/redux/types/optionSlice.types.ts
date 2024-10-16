export interface OptionState {
  error:string|null;
  loading:boolean
  optionPackage:OptionPackageState[]
}


export interface OptionPackageState{
   id:string;
   package:string;
   amount:number;
   days:number;
}

