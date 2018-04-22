import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/auth/login';

import Card, { CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';
// import Request from "../../utils/request";

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.renderEmailField = this.renderEmailField.bind(this);
        this.renderPasswordField = this.renderPasswordField.bind(this);
    }

    componentDidMount() {
        document.body.classList.add('body--auth');
    }

    componentWillUnmount() {
        document.body.classList.remove('body--auth');
    }

    handleRegisterClick() {
        console.log('Register clicked!');
    }

    handleFormSubmit(values) {
        this.props.userLogin(values);
    }

    renderEmailField(field) {
        return (
            <TextField
                id="email_login"
                // type="email"
                floatingLabelText="Username"
                style={{ width: 'auto' }}
                {...field.input}
            />
        );
    }

    renderPasswordField(field) {
        return (
            <TextField
                id="password_login"
                type="password"
                floatingLabelText="Password"
                style={{ width: 'auto' }}
                {...field.input}
            />
        );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="auth-wrapper">
                <div className="logo">
                    <h1>myExpenses</h1>
                </div>
                <Card className="auth-card">
                    <CardHeader
                        title="Login"
                        style={{
                            padding: '0'
                        }}
                        titleStyle={{
                            fontSize: '32px'
                        }}
                    />
                    <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                        <div className="card-form" style={{ marginBottom: '22px'}}>
                            <Field
                                name="email"
                                component={this.renderEmailField}
                            />
                            <Field
                                name="password"
                                component={this.renderPasswordField}
                            />
                        </div>
                        <CardActions
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <FlatButton label="Register" secondary={true} onClick={this.handleRegisterClick} />
                            {   this.props.logging ?
                                <CircularProgress /> :
                                <FlatButton label="Log In" primary={true} type="submit" />
                            }
                        </CardActions>
                    </form>
                </Card>
            </div>
        );
    }

}

function isEmailValid(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email);
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Enter an email';
    }
    // } else if (!isEmailValid(values.email)) {
    //     errors.email = 'Invalid email address';
    // }

    if (!values.password) {
        errors.password = 'Enter a password';
    }

    return errors;
}

function mapStateToProps(state) {
    return { logging: state.auth.logging };
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(
    connect(mapStateToProps, { userLogin })(Login)
);