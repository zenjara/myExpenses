import {
  black3,
  bold,
  myExpensesPurple
} from '../../assets/shared-styles/general';

const styles = {
  categoriesPageTitle: {
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
  categoryListItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '18px'
  },
  listItemInfo: {
    flexGrow: 1
  },
  deleteAction: {
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: '#794C68',
      textDecoration: 'underline'
    }
  },
  categoryName: {
    fontSize: '24px'
  },
  categoryCreated: {
    color: black3,
    fontSize: '14px'
  }
};

export default styles;
