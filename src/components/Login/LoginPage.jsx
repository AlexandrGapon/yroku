import React from 'react'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'
import { login } from '../redux/authReducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <div>
                <input {...field} {...props} />
            </div>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </div>
    )
}


const MyCheckbox = ({ children, ...props }) => {
    const [field] = useField(props)

    return (
        <div>
            <label className='checkbox-input'>
                <input type='checkbox' {...field} {...props} />
                {children}
            </label>
        </div>
    )
}

const initialValues = {
    email: '',
    password: '',
    rememberMe: false
}

const validation = Yup.object({

    email: Yup.string()
        .email('incorrect email')
        .required('field is required'),

    password: Yup.string()
        .required('field is required')
})

const LoginPage = (props) => {

    if (props.isAuth) {
        return <Redirect to={`/profile`} />
    }

    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={(values) => {
                    props.login(values.email, values.password, values.rememberMe)
                }}
            >
                {({ isValid, dirty }) => (
                    <Form>
                        <div>
                            <MyTextInput
                                label='Email'
                                name='email'
                                type='text'
                                placeholder='Your emeail'
                            />
                        </div>
                        <div>
                            <MyTextInput
                                label='Password'
                                name='password'
                                type='password'
                                placeholder='Your password'
                            />
                        </div>
                        <div>
                            <MyCheckbox name='rememberMe'>
                                Remember Me
                            </MyCheckbox>
                        </div>

                        <button type='submit' disabled={!isValid || !dirty}>Login</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(LoginPage)