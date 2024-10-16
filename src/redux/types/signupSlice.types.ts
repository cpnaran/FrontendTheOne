export interface SignupState {
  error:string|null;
  loading:boolean
}


export interface SignInRequest {
  fullName?: string;
  telNo?: string;
  packageId:string;
  license?:string;
  userId?:string;
  token?:string

}
