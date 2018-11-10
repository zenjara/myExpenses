import { myExpensesPurple } from '../../assets/shared-styles/general';

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    width: '200px',
    padding: () => {
      return window.require ? '40px 0 24px 0' : '24px 0';
    },
    backgroundColor: myExpensesPurple
  },
  sidebarLogo: {
    marginBottom: '24px',
    padding: '0 16px',
    textAlign: 'center'
  },
  sidebarItems: {
    flexGrow: 1
  }
};

export default styles;
