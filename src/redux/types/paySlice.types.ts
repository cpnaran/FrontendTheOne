export interface PayState {
    error:string|null;
    loading:boolean
  }
  export interface PayRequest {
    license: string;
    userId:string;
  }
  