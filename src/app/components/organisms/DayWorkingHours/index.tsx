import React from 'react';
import ReactDOM from 'react-dom';
import {Formik, Field, Form, ErrorMessage, FieldArray} from 'formik';
import DurationInput from "../../molecules/DurationInput";
import {Wrapper, MainWrapper, Button} from "./styles"

export const DayWorkingHours = ({day}: any) => {
    const initialValues = {
        working_hours: [
            {
                start_time: '',
                end_time: '',
                day: `${day}`
            },
        ],
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                // await new Promise((r) => setTimeout(r, 500));
                // alert(JSON.stringify(values, null, 2));
                console.log(values)
            }}
        >
            {({values}) => (
                <Form>
                    <FieldArray name="working_hours">
                        {({insert, remove, push}) => (
                            <Wrapper>
                                <h1 style={{margin: "5px 15px"}}>{day}</h1>
                                <MainWrapper>
                                    <div>
                                        {values.working_hours.length > 0 &&
                                            values.working_hours.map((workingHour: any, index: number) => (
                                                <DurationInput key={index} duration={workingHour} index={index}
                                                               name={"working_hours"}/>
                                            ))}
                                    </div>
                                    <Button
                                        type="button"
                                        onClick={() => push({ start_time: '', end_time: '', day:`${day}` })}
                                    >
                                        Add time slot
                                    </Button>
                                </MainWrapper>
                            </Wrapper>
                        )}
                    </FieldArray>
                </Form>
            )}
        </Formik>
    );
}

