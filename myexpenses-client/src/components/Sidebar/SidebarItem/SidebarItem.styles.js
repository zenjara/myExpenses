import { semibold } from '../../../assets/shared-styles/general';

const styles = {
  sidebarItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '24px 0',
    padding: '0 16px',
    color: props => (props.isHovered ? '#fff' : 'rgba(255, 255, 255, 0.5)'),
    fontSize: '13px',
    fontWeight: semibold,
    letterSpacing: '1px',
    cursor: 'pointer',
    textDecoration: 'none',
    '& span': {
      marginLeft: '8px'
    },
    '&:hover': {
      color: '#fff'
    }
  },
  navActive: {
    color: '#fff'
  }
};

export default styles;
