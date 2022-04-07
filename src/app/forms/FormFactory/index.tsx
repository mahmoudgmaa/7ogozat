import {DashboardForms} from "../Dashboard";
import {Formik} from "formik";
import {dashboard_initial_values} from "../initialValues";
import {DashboardSchemas} from "../schema";
import DropDownForm from "../../components/molecules/AccordionForm/item";
import React from "react";
import {useSelector} from "react-redux";
import Categories from "../../../redux/category";
import {useAppDispatch} from "../../../redux/store";
import {useParams} from "react-router-dom";

export const FormFactory = ()=>{

    const params = useParams();
    const dispatch = useAppDispatch();
    const currentPath = useSelector(
        (state: any) => state._currentPath.currentPath
    );
    const onFormSubmit = (values: any, setSubmitting: any) => {
        dispatch(Categories.thunks.doCreateCategory({business_id:params.id,category:values}))
    };
    const Form = DashboardForms[currentPath|| "Business Info"]
    return(
        <Formik
            initialValues={dashboard_initial_values[currentPath|| "Business Info"]}
            validationSchema={DashboardSchemas[currentPath || "Business Info"]}
            onSubmit={(values, { setSubmitting }) => {
                onFormSubmit(values, setSubmitting);
            }}
        >
            <DropDownForm.Edit >
                <Form/>
            </DropDownForm.Edit>
        </Formik>
    )


}
