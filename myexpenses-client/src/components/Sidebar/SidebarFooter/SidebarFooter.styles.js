import { semibold } from '../../../assets/shared-styles/general';

const styles = {
  sidebarFooter: {
    padding: props => {
      return props.isFooterOpen ? '16px 0 0 0' : '16px 0';
    },
    backgroundColor: props => {
      return props.isFooterOpen ? 'rgba(0, 0, 0, 0.25)' : null;
    }
  },
  sidebarFooterPrimary: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    cursor: props => (props.loading ? 'auto' : 'pointer'),
    '& svg': {
      transform: props => {
        return props.isFooterOpen ? null : 'rotateZ(180deg)';
      }
    }
  },
  sidebarAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    marginRight: '12px'
  },
  sidebarUserName: {
    flexGrow: '1',
    color: '#f9fbfc',
    fontSize: '15px',
    fontWeight: semibold,
    wordBreak: 'break-all'
  },
  footerVersionSeparator: {
    height: '1px',
    margin: '0 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  footerVersionNumber: {
    margin: '12px 16px',
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '12px',
    fontWeight: semibold,
    cursor: 'default'
  }
};

export default styles;
