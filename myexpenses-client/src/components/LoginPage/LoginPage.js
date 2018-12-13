import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import { login } from './Login.data';
import LogoIcon from '../Shared/Icons/LogoMyExpenses';
import MeButton from '../Shared/MeButton/MeButton';
import LocalStorage from '../../localStorage';
import styles from './LoginPage.styles';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = { email: '', password: '', submitting: false };
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.setState({ submitting: true });

    login(email, password).then(res => {
      LocalStorage.setAccessToken(res.data.token);
      this.setState({ submitting: false });
    });
  }

  render() {
    const { classes } = this.props;
    const { email, password, submitting } = this.state;

    return (
      <div className={classes.loginPage}>
        <div className={classes.loginPageContentWrapper}>
          <div className={classes.loginPageContent}>
            <div className={classes.logoWrapper}>
              <LogoIcon size={180} />
            </div>
            <span className={classes.verticalBorder} />
            <div className={classes.loginFormWrapper}>
              <form onSubmit={this.handleLoginSubmit}>
                <h3>Login</h3>
                <fieldset disabled={submitting}>
                  <input
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={ev => this.setState({ email: ev.target.value })}
                  />
                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={ev =>
                      this.setState({ password: ev.target.value })
                    }
                  />
                  <div className={classes.actionsContainer}>
                    <Link to="/register">New Member?</Link>
                    <MeButton text="LOG IN" />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(LoginPage);
