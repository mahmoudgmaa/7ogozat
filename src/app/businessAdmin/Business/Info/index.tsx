import {useAppDispatch} from 'redux/store';
import {useTranslation} from "react-i18next";
import Business from "../../../../redux/business";
import {unwrapResult} from "@reduxjs/toolkit";
import {DashboardForms} from "../../../forms/Dashboard";
import {Formik} from "formik";
import {DashboardSchemas} from "../../../forms/schema";
import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {BusinessInfoForm} from "../../../forms/Dashboard/BusinessInfoForm";

export const BusinessInfo = ({business}:any)=>{
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();

    const onFormSubmit = (values: any, {setSubmitting}: any) => {
        dispatch(Business.thunks.doUpdateBusiness(values))
            .then(unwrapResult)
            .then((res)=> console.log(res))
            .catch((err: any)=> console.log(err));
        setSubmitting(false);
    }
    const params = useParams();
    const currentPath = useSelector(
        (state: any) => state._currentPath.currentPath
    );
const Form = DashboardForms[currentPath|| "Business Info"]
return(
    <Formik
        initialValues={business}
        validationSchema={DashboardSchemas[currentPath]}
        onSubmit={(values, { setSubmitting }) => {
            onFormSubmit(values, setSubmitting);
        }}
    >
        <BusinessInfoForm/>
    </Formik>
)
}