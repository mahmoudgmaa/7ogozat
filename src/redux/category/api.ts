import axios from "axios";

const updateCategory = (data: any) =>
    axios.put(`/v1/business_admins/businesses/${data.business_id}/categories/${data.category.id}`, data.category);
const createCategory = (data: any) =>
    axios.post(`/v1/business_admins/businesses/${data.business_id}/categories/`, data.category)
const getCategories = (business_id: number) =>
    axios.get(`/v1/business_admins/businesses/${business_id}/categories/`);
const getCategory = (business_id: number, category_id: number) =>
    axios.get(`/v1/business_admins/businesses/${business_id}/categories/${category_id}`);
const deleteCategory = (data:any) =>
    axios.delete(`/v1/business_admins/businesses/${data.business_id}/categories/${data.category_id}`);

const categoriesApi = {
    createCategory,
    updateCategory,
    getCategory,
    getCategories,
    deleteCategory
};
export default categoriesApi;
