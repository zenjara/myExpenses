import {
  myExpensesPurple,
  bold,
  black1
} from '../../../assets/shared-styles/general';

const styles = {
  meCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderLeft: `solid 8px ${myExpensesPurple}`,
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 8px 0 #D4d4d4'
  },
  meCardTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: 'solid 1px rgba(0, 0, 0, 0.1)',
    borderRight: 'solid 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '0 8px 0 0'
  },
  meCardTitle: {
    padding: '16px',
    color: black1,
    fontSize: '15px',
    fontWeight: bold
  },
  meCardSeparator: {
    margin: 0,
    border: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
  },
  meCardContent: {
    flexGrow: '1',
    border: 'solid 1px rgba(0, 0, 0, 0.1)',
    borderTop: 0,
    borderLeft: 0,
    borderRadius: '0 0 8px 0',
    padding: '16px'
  }
};

export default styles;
