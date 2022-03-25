export interface UserPayload {
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
  user: UserPayload | null;
  isLoggedIn: boolean;
  token: string | null;
  error: null | any
}
