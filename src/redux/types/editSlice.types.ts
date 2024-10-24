export interface EditState {
  error:string|null;
  loading:boolean
}


export interface EditRequest {
  fullName?: string;
  telNo?: string;
  userId?:string;

}
