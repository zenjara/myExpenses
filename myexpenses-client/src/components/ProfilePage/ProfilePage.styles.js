import {
  black1,
  black2,
  black3,
  bold,
  myExpensesPurple,
  semibold
} from '../../assets/shared-styles/general';

const inputStyles = {
  width: '100%',
  border: 'solid 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '4px',
  padding: '12px 16px',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  color: black1,
  fontSize: '15px',
  caretColor: myExpensesPurple,
  resize: 'none'
};

const styles = {
  profilePageTitle: {
    marginTop: '0',
    fontSize: '32px',
    fontWeight: bold
  },
  loadingWrapper: {
    marginTop: '64px',
    textAlign: 'center'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center'
  },
  infoSeparator: {
    border: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    margin: '24px 0'
  },
  accountNotice: {
    maxWidth: '50%',
    marginTop: '16px',
    color: black2,
    fontSize: '13px',
    lineHeight: '1.4'
  },
  profileField: {
    width: '360px',
    marginRight: '16px',
    '& label': {
      display: 'block',
      marginBottom: '12px',
      color: black1,
      fontSize: '12px',
      fontWeight: semibold
    }
  },
  regularInput: {
    ...inputStyles,
    '&:hover': {
      borderColor: myExpensesPurple
    },
    '&:focus': {
      borderColor: myExpensesPurple,
      boxShadow: '0 0 4px 0 rgba(121, 76, 104, 0.5)',
      outline: 'none'
    }
  },
  disabledInput: {
    ...inputStyles,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: black3
  }
};

export default styles;
