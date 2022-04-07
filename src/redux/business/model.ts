import {TCategory} from "../category/model";

export type TBusiness = {
  id: number;
  email: string;
  ar_name: string;
  en_name: string;
  logo: {
    image:string;
  },
  categories: TCategory[]

};
