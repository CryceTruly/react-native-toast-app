export type AuthStackParamList = {
  Login: undefined;
  'Create account': undefined;
};
export type AllScreenParamList = {
  name?: string;
  image: string;
};
export type HomeStackParamList = {
  'User List': undefined;
  'User detail': {
    name?: string;
    image: string;
  };
};

export interface RootStackParamList
  extends HomeStackParamList,
    AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
