import React, { Component } from 'react';
import Card, { CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
    constructor(props) {
        super(props);

        this.handleRegisterClick = this.handleRegisterClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
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

    handleLoginClick() {
        console.log('Login clicked!');
    }

    render() {
        return (
            <div className="auth-wrapper">
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
                    <div className="card-form" style={{ marginBottom: '22px'}}>
                        <TextField
                            id="email_login"
                            type="email"
                            floatingLabelText="Username"
                            style={{ width: 'auto' }}
                        />
                        <TextField
                            id="password_login"
                            type="password"
                            floatingLabelText="Password"
                            style={{ width: 'auto' }}
                        />
                    </div>
                    <CardActions
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <FlatButton label="Register" secondary={true} onClick={this.handleRegisterClick} />
                        <FlatButton label="Log In" primary={true} onClick={this.handleLoginClick} />
                    </CardActions>
                </Card>
            </div>
        );
    }

}

export default Login;