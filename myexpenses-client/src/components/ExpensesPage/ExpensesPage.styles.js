import {
  black2,
  bold,
  myExpensesPurple
} from '../../assets/shared-styles/general';

const styles = {
  expensesPageTitle: {
    marginTop: '0',
    fontSize: '32px',
    fontWeight: bold
  },
  loadingWrapper: {
    marginTop: '64px',
    textAlign: 'center'
  },
  emptyWrapper: {
    marginTop: '64px',
    textAlign: 'center'
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
    color: black2,
    textAlign: 'left',
    tableLayout: 'fixed',
    '& thead': {
      borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)',
      '& th': {
        padding: '12px 0',
        fontWeight: bold
      }
    },
    '& tbody': {
      fontSize: '16px',
      '& tr': {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)'
        }
      },
      '& td': {
        display: 'table-cell',
        padding: '12px 0'
      }
    },
    '& tr:not(:last-child)': {
      borderBottom: 'solid 1px rgba(0, 0, 0, 0.1)'
    }
  },
  deleteAction: {
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#794C68',
      textDecoration: 'underline'
    }
  },
  headerAmount: { width: '170px' },
  headerDate: { width: '150px' },
  headerCategory: { width: '240px' },
  headerAction: { width: '120px' }
};

export default styles;
