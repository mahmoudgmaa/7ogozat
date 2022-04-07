import axios from "axios";


const base_url = (business_id:number,)=>`v1/business_admins/businesses/${business_id}/resources/`

const createResource = (data: any) => axios.post(base_url(data.business_id), data);
const updateResource = (data:any) => axios.put(base_url(data.business_id)+`/${data.id}`,data);
const getResource = (data:any) => axios.get(base_url(data.business_id)+`/${data.id}`);
const getResources = (data:any) => axios.get(base_url(data.business_id));

const userApi = {
  createResource,
  updateResource,
  getResource,
  getResources
};
export default userApi;
