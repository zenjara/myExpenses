import {
  black1,
  myExpensesPurple,
  bold,
  semibold
} from '../../../../assets/shared-styles/general';

const styles = {
  modalBody: {
    padding: '16px'
  },
  modalBodyTitle: {
    marginBottom: '24px',
    fontSize: '24px',
    fontWeight: bold
  },
  modalBodyContent: {
    marginBottom: '24px',
    '& label': {
      display: 'inline-block',
      marginBottom: '12px',
      color: black1,
      fontSize: '12px',
      fontWeight: semibold
    },
    modalInput: {
      height: '44px'
    },
    '& input': {
      width: '100%',
      border: 'solid 1px rgba(0, 0, 0, 0.2)',
      borderRadius: '4px',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      fontSize: '15px',
      caretColor: myExpensesPurple,
      resize: 'none',
      '&:hover': {
        borderColor: myExpensesPurple
      },
      '&:focus': {
        borderColor: myExpensesPurple,
        boxShadow: '0 0 4px 0 rgba(121, 76, 104, 0.5)',
        outline: 'none'
      }
    }
  },
  fieldInputs: {
    display: 'flex'
  },
  formField: {
    flexGrow: '1'
  }
};

export default styles;
