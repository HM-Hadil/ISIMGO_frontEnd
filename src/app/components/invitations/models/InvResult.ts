export class InvResult{
  id!:String;
  sender!: {
    id:string
    firstname: string,
    lastname: string,
    email: string,
    resume: string,
    role: string,
  };
  reciever!: {
    id:string,
    firstname: string,
    lastname: string,
    email: string,
    resume: string,
    role: string,
  };
  status!:string;

}
