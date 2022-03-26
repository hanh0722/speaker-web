export interface User {
  _id: string;
  username: string;
  name: string;
  role: string;
  is_validation: boolean;
  createdAt: string;
  updatedAt: string
}
export interface UserState {
  isLoading: boolean;
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
  error: null | any;
  timeout: null | number;
  expiration: boolean
}

export interface UserPayload {
  payload: {
    user: User,
    token: string
  }
}