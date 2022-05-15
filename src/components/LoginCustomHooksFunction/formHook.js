import { useState } from "react";
export default function useFormState(initialState, handleSubmit){
    const [formValues, setFormValues] = useState(initialState);
    const updateFormState =(event) =>{
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        handleSubmit();
    }
    return[
        updateFormState,
        handleFormSubmit,
        formValues
    ]
}