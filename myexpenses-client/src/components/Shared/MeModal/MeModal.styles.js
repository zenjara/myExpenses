const styles = {
  modalOverlay: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.6)'
  },
  modalWrapper: {
    width: props => props.width
  },
  closeIcon: {
    display: 'flex',
    cursor: 'pointer'
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '32px',
    '& button:not(:last-child)': {
      marginRight: '16px'
    }
  }
};

export default styles;
