import { bold, myExpensesPurple } from '../../assets/shared-styles/general';

const styles = {
  expensesPageTitle: {
    marginTop: '0',
    fontSize: '32px',
    fontWeight: bold
  },
  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: myExpensesPurple,
    position: 'fixed',
    bottom: '48px',
    right: '48px',
    cursor: 'pointer',
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.1)'
  },
  expensesTable: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    '& thead': {
      borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)',
      '& th': {
        padding: '12px 0',
        fontWeight: bold
      }
    },
    '& tbody': {
      display: 'block',
      maxHeight: '560px',
      fontSize: '16px',
      overflowY: 'scroll',
      '& td': {
        display: 'table-cell',
        padding: '12px 0'
      }
    },
    '& tr:not(:last-child)': {
      borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)'
    }
  },
  headerAmount: { width: '170px' },
  headerCategory: { width: '240px' }
  // headerDescription: { width: '80px' }
};

export default styles;
