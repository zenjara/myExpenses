import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import { MODAL_NEW } from '../../../types/modal.types';
import NewModal from '../Modals/NewModal';
import styles from './MeModal.styles';

class EcModal extends Component {
  constructor(props) {
    super(props);

    this.handleOnKeyboardPress = this.handleOnKeyboardPress.bind(this);
    this.handleOnOverlayClick = this.handleOnOverlayClick.bind(this);
    this.handleOnDialogClick = this.handleOnDialogClick.bind(this);

    this.modalRoot = document.getElementById('modal-root');
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleOnKeyboardPress, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleOnKeyboardPress, true);
  }

  handleOnKeyboardPress(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.hideModal();
    }
  }

  handleOnOverlayClick() {
    this.props.hideModal();
  }

  handleOnDialogClick(event) {
    event.stopPropagation();
  }

  renderModal() {
    const { modalType } = this.props;

    switch (modalType) {
      case MODAL_NEW:
        return <NewModal {...this.props} />;
      default:
        return null;
    }
  }

  render() {
    const { classes } = this.props;

    const modalUI = (
      <div className={classes.modalOverlay} onClick={this.handleOnOverlayClick}>
        <div
          className={classes.modalWrapper}
          onClick={this.handleOnDialogClick}
        >
          {this.renderModal()}
        </div>
      </div>
    );

    return ReactDOM.createPortal(modalUI, this.modalRoot);
  }
}

EcModal.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default injectSheet(styles)(EcModal);
