import Category from "./Categories";
import Staff from "./Staff";
import Services from "./Services";
// import Schedule from "./Schedule";
import {BusinessInfo} from "./Info";
import BusinessPolicy from "./components/Business_policy";
import SchedulingHistory from "./components/Scheduling_history";

const components: any = {
  business_info: BusinessInfo,
  categories: Category,
  staff: Staff,
  services: Services,
  business_policy: BusinessPolicy,
  // schedule: Schedule,
  scheduling_history: SchedulingHistory,
};

export default components;
