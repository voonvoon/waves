import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorHelper } from 'utils/tools';
import {
    TextField
} from '@mui/material';


const SearchBar  = (props) => {
    
    const formik = useFormik({
        initialValues:{ keywords: ''},
        validationSchema: Yup.object({
            keywords: Yup.string()
            .min(3, 'you need to search more than 3 characters')
            .max(200, 'you need to search more than 200 characters')
        }),
        onSubmit:( values, { resetForm })=>{
            props.handleKeywords(values.keywords)
            resetForm();
        }
    })

    return(
        <div className='container'>
            <form className='mt-3' onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        style={{
                            width:'100%'
                        }}
                        placeholder='Search for somethings'
                        name="keywords"
                        variant="outlined"
                        label="Search for somthing" 
                        {...formik.getFieldProps('keywords')}
                        {...errorHelper(formik,'keywords')}

                    />
                </div>

            </form>

        </div>
    )
}

export default SearchBar;