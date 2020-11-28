import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {login} from '../redux/authReducer';
import style from '../common/formControls/formControl.module.css'

const LoginForm = ({handleSubmit, error}) => { 
    return (   
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={'input'} name={'email'} placeholder={'Login'} />
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'} type={'password'} />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`} />
    }
    

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm  onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login} ) (Login);