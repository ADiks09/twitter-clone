export interface IUser {
  email: string;
  password: string;
}

export interface IFullUser extends IUser {
  firstName: string
  lastName: string
  name: string
  phone: string
  birthday: Date
  createdAt?: Date
  token?: string
}

export interface IError {
  message: string,
}
