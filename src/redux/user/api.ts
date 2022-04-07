import axios from "axios";

const signUp = (data: any) => axios.post("/v1/business_admins", data);
const signIn = (data: any) => axios.post("/v1/business_admins/sign_in", data);
const getSelf = () => axios.get("/v1/business_admins/business_admins");

const userApi = {
  signUp,
  signIn,
  getSelf
};
export default userApi;
