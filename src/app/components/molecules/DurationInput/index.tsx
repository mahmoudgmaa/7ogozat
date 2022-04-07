import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {useField, Formik, Form, Field} from "formik";
import {Button, FormControl, TextField} from "@mui/material";
import {useState} from "react";
import {TimePicker} from "@mui/lab";
import TextInput from "../TextInput";
import {posix} from "path";
import dateFormat from 'date-fns/format'
import {
    TimePickersWrapper,
} from "./styles";

function DurationInput({duration, ...props}: any) {
    console.log(props)
    const [fromField, fromMeta, fromHelpers] = useField({
        value: duration.start_time,
        name: `${props.name}.${props.index}.start_time`
    });
    const [toField, toMeta, toHelpers] = useField({
        value: duration.end_time,
        name: `${props.name}.${props.index}.end_time`,
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePickersWrapper>
                <TimePicker
                    label={"from"}
                    value={fromField.value}
                    onChange={(newValue) => {
                        if (newValue) {
                            fromHelpers.setValue(newValue)
                        }
                    }}
                    renderInput={(params: any) => {
                        const {inputProps} = params
                        return <TextField {...params} {...inputProps} {...props} />
                    }
                    }
                />
                <TimePicker
                    label={"to"}
                    value={toField.value}
                    onChange={(newValue) => {
                        if (newValue) {
                            toHelpers.setValue(newValue)
                        }
                    }}
                    renderInput={(params: any) => {
                        const {inputProps} = params
                        return <TextField {...params} {...inputProps}  />
                    }
                    }
                />
            </TimePickersWrapper>
        </LocalizationProvider>

    );
}


export default DurationInput;