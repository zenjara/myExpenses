import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import MeButton from '../../MeButton';
import MeCard from '../../MeCard';
import styles from './NewCategoryModal.styles';

class NewCategoryModal extends Component {
  constructor(props) {
    super(props);

    this.handleOnKeyboardPress = this.handleOnKeyboardPress.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      categoryName: ''
    };
  }

  handleOnKeyboardPress(event) {
    if (event.keyCode === 13) {
      this.handleActionClick();
    }
  }

  handleActionClick() {
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
                />
              </div>
            </div>
          </div>
          <div className={classes.modalActions}>
            <MeButton text="CANCEL" onClick={hideModal} />
            <MeButton
              text="ADD"
              purple
              width="80px"
              onClick={this.handleActionClick}
            />
          </div>
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
