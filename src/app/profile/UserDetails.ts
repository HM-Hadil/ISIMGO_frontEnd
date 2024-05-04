export class UserDetails{
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  enabled!: boolean;
  password!:string;
  resume!: string;
  role!: string;
  publications!:{
  id: any,
  content: string,
  createdAt: any
}[]
}
