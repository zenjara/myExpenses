import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import MeButton from '../../MeButton';
import MeCard from '../../MeCard';
import styles from './NewCategoryModal.styles';

class NewCategoryModal extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      categoryName: ''
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { categoryName } = this.state;

    this.props.createCategory({ categoryName });
  }

  handleInputChange(event) {
    this.setState({ categoryName: event.target.value });
  }

  render() {
    const { classes, hideModal } = this.props;
    const { categoryName } = this.state;

    return (
      <MeCard>
        <div className={classes.modalBody}>
          <form onSubmit={this.handleFormSubmit}>
            <div className={classes.modalBodyContent}>
              <div className={classes.modalBodyTitle}>New Category</div>
              <div className={classes.fieldInputs}>
                <div className={classes.formField}>
                  <label>CATEGORY NAME</label>
                  <input
                    type="text"
                    placeholder="Enter category name"
                    className={classes.modalInput}
                    value={categoryName}
                    onChange={this.handleInputChange}
                    autoFocus
                  />
                </div>
              </div>
            </div>
            <div className={classes.modalActions}>
              <MeButton text="CANCEL" type="button" onClick={hideModal} />
              <MeButton text="ADD" type="submit" purple width="80px" />
            </div>
          </form>
        </div>
      </MeCard>
    );
  }
}

NewCategoryModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  createCategory: PropTypes.func
};

export default injectSheet(styles)(NewCategoryModal);
