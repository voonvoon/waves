import React, { useState } from 'react';
import { Button } from '@mui/material';
import AuthForm from './authForm';
import PreventSignInRoute from 'hoc/preventSignInRoute';

const RegisterLogin = (props) => {
    const [formType, setFormType] = useState(false);

    const toogleFormType = () => {
        setFormType(!formType);
    }

    return(
        <PreventSignInRoute>
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        { formType ?
                            <>
                                <h1>New customers</h1>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through.</p>
                            </>
                            :
                            <>
                                <h1>welcome Back!</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            </>
                        }

                        <Button
                            variant="contained"
                            // color="default"
                            size="small"
                            onClick={ ()=> toogleFormType() }
                        >
                            { formType ? "Already registered ?" : "Need to register"}
                            
                        </Button>

                    </div>
                    <div className="right">
                        <h2>{formType ? 'Register':'Sign in'}</h2>
                        <AuthForm
                            formType={formType}
                            {...props}
                        />
                    </div>
                </div>
            </div>
        </div>
        </PreventSignInRoute>
    )
}

export default RegisterLogin;