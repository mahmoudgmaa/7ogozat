import {TBusiness} from "../business/model";

export type TUser = {
  id: number;
  email: string;
  name: string;
  provider: string;
  allow_password_change: boolean;
  nickname: string;
  image:string;
  businesses:[TBusiness]

};
