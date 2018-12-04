import {
  black1,
  bold,
  myExpensesPurple
} from '../../assets/shared-styles/general';

const styles = {
  dashboardPageTitle: {
    marginTop: '0',
    fontSize: '32px',
    fontWeight: bold
  },
  dashboardStats: {
    display: 'flex'
  },
  dailyStatsWrapper: {
    marginRight: '12px',
    flexBasis: '50%'
  },
  monthlyStatsWrapper: {
    marginLeft: '12px',
    flexBasis: '50%'
  },
  limitStat: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    color: black1
  },
  statLabel: {
    fontSize: '24px'
  },
  statValue: {
    fontSize: '32px'
  },
  statSeparator: {
    border: 0,
    borderTop: `1px solid ${myExpensesPurple}`
  }
};

export default styles;
