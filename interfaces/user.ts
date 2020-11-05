export interface IUser {
  name: string;
  email: string;
  password: string;
  activation?: boolean;
  createdAt: Date;
  editedAt: Date;
}
