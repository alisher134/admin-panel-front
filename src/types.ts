export enum UserRole {
  User = "USER",
  Admin = "ADMIN",
}

export interface IUser {
  id: number;
  name?: string;
  email: string;
  avatarUrl?: string;
  country?: string;
  role: UserRole;
}

export interface IAuthFormData extends Pick<IUser, "email"> {
  password: string;
}

export interface IRequest {
  id: number;
  description: string;
  cve: string;
  screenshot?: string;
}
