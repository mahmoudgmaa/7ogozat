import {TCategory} from "../category/model";
import {date} from "yup";

export type  TWorkingHour = {
  id: number;
  star_date: string;
  end_date: string
}
export type TSchedule = {
  id: number;
  working_hours: TWorkingHour[];
};
export type TResource = {
  id: number;
  email: string;
  ar_name: string;
  en_name: string;
  image:string;
  schedule: TSchedule

};
