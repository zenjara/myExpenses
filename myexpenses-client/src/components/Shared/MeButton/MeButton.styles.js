import {
  semibold,
  myExpensesPurple
} from '../../../assets/shared-styles/general';

const styles = {
  meButton: {
    display: 'flex',
    flexShrink: '0',
    justifyContent: 'center',
    alignItems: 'center',
    width: props => props.width,
    height: props => props.height,
    border: 'solid 1px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
    padding: '7px 12px',
    backgroundColor: props => {
      const { purple, clicked } = props;

      if (clicked) {
        if (purple) {
          return '#4C2324';
        }

        return '#e8e8e8';
      }

      if (purple) {
        return myExpensesPurple;
      }

      return '#fff';
    },
    color: props => (props.purple ? '#fff' : 'rgba(0, 0, 0, 0.75)'),
    fontSize: '14px',
    fontWeight: semibold,
    cursor: 'pointer',
    outline: 'none',
    opacity: props => (props.disabled ? '0.4' : '1'),
    pointerEvents: props => (props.disabled ? 'none' : 'auto'),
    '&:hover': {
      backgroundColor: props => {
        const { purple, clicked } = props;

        if (clicked) {
          if (purple) {
            return '#4C2324';
          }

          return '#e8e8e8';
        }

        if (purple) {
          return '#572A34';
        }

        return '#f4f4f4';
      }
    }
  },
  meButtonText: {
    textAlign: 'start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

export default styles;
