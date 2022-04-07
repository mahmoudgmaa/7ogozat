import axios from "axios";


const base_url = "/v1/business_admins/businesses"

const createBusiness = (data: any) => axios.post(base_url, data);
const updateBusiness = (data:any) => axios.put(base_url+`/${data.id}`,data);
const getBusiness = (id:number) => axios.get(base_url+`/${id}`);
const getBusinesses = (id:number) => axios.get(base_url);

const userApi = {
  createBusiness,
  updateBusiness,
  getBusiness
};
export default userApi;
