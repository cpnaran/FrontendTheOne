export interface RenewState {
  error:string|null;
  loading:boolean
}
export interface RenewRequest {
  packageId: string;
  license: string;
  userId:string;
}
