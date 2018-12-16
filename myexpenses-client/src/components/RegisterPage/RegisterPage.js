import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import { register } from './RegisterPage.data';
import LogoIcon from '../Shared/Icons/LogoMyExpenses';
import MeButton from '../Shared/MeButton/MeButton';
import styles from './RegisterPage.styles';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      submitting: false
    };
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
    const { name, email, password, passwordConfirmation } = this.state;

    if (password !== passwordConfirmation) {
      alert('Passwords do no match!');
      return;
    }

    this.setState({ submitting: true });
    register(name, email, password)
      .then(() => {
        alert('User successfully created!');
        this.props.history.push('/login');
      })
      .catch(err => {
        const errorMessage = `Error - ${err.response.data.email}`;
        this.setState({ submitting: false });
        alert(errorMessage);
      });
  }

  render() {
    const { classes } = this.props;
    const {
      name,
      email,
      password,
      passwordConfirmation,
      submitting
    } = this.state;

    return (
      <div className={classes.registerPage}>
        <div className={classes.registerPageContentWrapper}>
          <div className={classes.registerPageContent}>
            <div className={classes.logoWrapper}>
              <LogoIcon size={180} />
            </div>
            <span className={classes.verticalBorder} />
            <div className={classes.registerFormWrapper}>
              <form onSubmit={this.handleRegisterSubmit}>
                <h3>Register</h3>
                <fieldset disabled={submitting}>
                  <input
                    type="text"
                    value={name}
                    placeholder="Name"
                    onChange={ev => this.setState({ name: ev.target.value })}
                    autoFocus
                  />
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
                  <input
                    type="password"
                    value={passwordConfirmation}
                    placeholder="Confirm Password"
                    onChange={ev =>
                      this.setState({ passwordConfirmation: ev.target.value })
                    }
                  />
                  <div className={classes.actionsContainer}>
                    <Link to="/login">Already a Member?</Link>
                    <MeButton type="submit" text="REGISTER" />
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

export default injectSheet(styles)(RegisterPage);
