export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
}
