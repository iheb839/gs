export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  tel: string;
  dateN:Date;
  genre: string;
  role: string;
  departement: string;
}

export interface UserDto {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  tel: string;
  dateN:Date;
  genre: string;
  role: string;
  departement: string;
}
 
export interface CreateUserDto {
  email: string;
  firstname: string;
  lastname: string;
  tel: string;
  dateN:Date;
  genre: string;
  password: string;
  role: string;
  departement: string;
}

export interface UpdatePasswordDto {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface LoginResponse {
  user: User;
  token: string
}
export interface Stats {
  totalDocs: number;
  publicDocs: number;
  privateDocs: number;
  restrictedDocs: number;
}
export interface UpdatePasswordRequest {
  email: string;
  confirmCode: string;
  newPassword: string;
}
