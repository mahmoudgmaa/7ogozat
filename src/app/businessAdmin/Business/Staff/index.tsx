import React, {useEffect, useState} from 'react'
import {useTranslation} from "react-i18next";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {DashboardForms} from "app/forms/Dashboard";
import {useAppDispatch} from "redux/store";
import Categories from "redux/category";
import {TCategory} from "redux/category/model";
import {Formik} from "formik";
import {DashboardSchemas} from "app/forms/schema";
import DropDownForm from "app/components/molecules/AccordionForm/item";
import {Button} from "@mui/material";
import StaffForm from "app/forms/Dashboard/StaffForm";
import {RowWrapper} from "../../../forms/Dashboard/styles";
import {days_of_week} from "../../../forms/Dashboard/days_of_week";
import DurationInput from "../../../components/molecules/DurationInput";
import {DayWorkingHours} from "../../../components/organisms/DayWorkingHours";
import Resources from 'redux/resource';
import Business from "../../../../redux/business";
import {TResource} from "../../../../redux/resource/model";

const Staff = ({business}: any) => {
    const {t, i18n} = useTranslation();
    const [forms, setForms] = useState(business.resources)
    console.log(business)

    const params = useParams();
//     const staff =useSelector((state) =>
//         Resources.selectors.selectById(state, params.id || "")
//     );
// useEffect(()=>{
//     dispatch(Resources.thunks.doFetchResources({business_id:params.id}))
// },[staff])
    let formsArray: any = {...business.staff}
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
    const Form = DashboardForms["Staff"]
    const dispatch = useAppDispatch();

    const onFormSubmit = (values: any, setSubmitting: any) => {
        dispatch(Categories.thunks.doCreateCategory({business_id: params.id, category: values}))
    };
    const FormsComp = () => {

        let updateForm = (values: any, setSubmitting: any) => {
            dispatch(Resources.thunks.doUpdateResource({business_id: params.id, resource: values}))
        };
        ;
        let createForm = (values: any, setSubmitting: any) => {
            dispatch(Resources.thunks.doCreateResource({business_id: params.id, resource: values}))
        };

        return (
            forms?.map(
                (resource: TResource, index: number) =>
                    <DropDownForm.Edit key={resource.id} item={resource}>
                        <Formik
                            initialValues={{...resource}}
                            onSubmit={resource.id == 0 ? createForm : updateForm}
                        >
                            <div>
                                <StaffForm/>
                            </div>
                        </Formik>
                        <div>
                            <h2 style={{margin: "25px 15px"}}>{t("weekly_work_time")}</h2>
                            <RowWrapper>
                                {days_of_week.map((day, index) => {
                                    return <DayWorkingHours key={index} day={day.name}/>
                                })}</RowWrapper>
                        </div>
                    </DropDownForm.Edit>
            )
        )
    }

    return (
        <div>
            <Button variant="contained" onClick={showEmptyForm}>add</Button>


            {FormsComp()}

        </div>

    )


}

export default Staff