import {useAppDispatch} from 'redux/store';
import {useTranslation} from "react-i18next";
import Business from "../../../../redux/business";
import {unwrapResult} from "@reduxjs/toolkit";
import {FormFactory} from "../../../forms/FormFactory";
import {DashboardForms} from "../../../forms/Dashboard";
import {Formik} from "formik";
import {DashboardSchemas} from "../../../forms/schema";
import DropDownForm from "../../../components/molecules/AccordionForm/item";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Categories from "redux/category"
import {TCategory} from "../../../../redux/category/model";
import {Button} from "@mui/material";
import CategoryForm from "../../../forms/Dashboard/CategoryForm";

const CategoriesPage = ({business}: any) => {
    const {t, i18n} = useTranslation();

    useEffect(()=>{
        setForms(business.categories)
    },[business])

    const [forms,setForms] = useState(business.categories)
    const params = useParams();
    let formsArray:any = {...business.categories}
    const showEmptyForm = () => {
        console.log(formsArray)
        console.log("gg")
        setForms([{
            id: 0,
            business_id: parseInt(params?.id || "0"),
            en_name: "",
            ar_name: "",
            en_description: "",
            ar_description: ""
        }, ...forms])
    }
    const currentPath = useSelector(
        (state: any) => state._currentPath.currentPath
    );
    const Form = DashboardForms[currentPath || "Business Info"]
    const dispatch = useAppDispatch();

    const onFormSubmit = (values: any, setSubmitting: any) => {
        dispatch(Categories.thunks.doCreateCategory({business_id: params.id, category: values}))
    };
    const FormsComp =()=> {

        let updateForm  = (values: any, setSubmitting: any) => {
            dispatch(Categories.thunks.doUpdateCategory({business_id: params.id, category: values})).then( ()=> setSubmitting(false))
        };
        let createForm  = (values: any, setSubmitting: any) => {
            dispatch(Categories.thunks.doCreateCategory({business_id: params.id, category: values}))
        };
        return (
            forms.map(
                (category: TCategory, index: number) => <Formik
                    key={category.id}
                    initialValues={category}
                    validationSchema={DashboardSchemas[currentPath || "Business Info"]}
                    onSubmit={ category.id===0? createForm :  updateForm}

                >
                    <DropDownForm.Edit item ={category}
                                       deleteFun={()=> dispatch(Categories.thunks.doDeleteCategory({business_id: params.id, category_id: category.id}))}>
                        <CategoryForm/>
                    </DropDownForm.Edit>
                </Formik>
            )
        )
    }

    return (
        <div>
            <Button variant="contained" onClick={showEmptyForm}>add</Button>
            <FormsComp/>
        </div>

    )


}

export default CategoriesPage