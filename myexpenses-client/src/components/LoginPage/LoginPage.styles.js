import { bold, myExpensesPurple } from '../../assets/shared-styles/general';

const styles = {
  loginPage: {
    display: 'flex',
    alignItems: 'stretch',
    height: '100%',
    backgroundImage: `linear-gradient(141deg, ${myExpensesPurple} 0%, #572A34 51%, #4C2324 75%)`
  },
  loginPageContentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  loginPageContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: '40%'
  },
  verticalBorder: {
    height: '100%',
    border: 0,
    borderRight: '1px solid #fff',
    margin: '0 32px'
  },
  loginFormWrapper: {
    '& h3': {
      marginTop: '0',
      color: '#fff',
      fontSize: '32px',
      fontWeight: bold
    },
    '& fieldset': {
      border: 0,
      padding: 0,
      margin: 0,
      minWidth: 0
    },
    '& input': {
      width: '100%',
      border: 'solid 1px rgba(0, 0, 0, 0.2)',
      borderRadius: '4px',
      marginBottom: '24px',
      padding: '12px 16px',
      backgroundColor: '#fff',
      fontSize: '15px',
      caretColor: myExpensesPurple,
      outline: 'none'
    }
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& a': {
      marginRight: '16px',
      color: '#fff',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    }
  }
};

export default styles;
