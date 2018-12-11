import {
  black2,
  black3,
  myExpensesPurple
} from '../../../assets/shared-styles/general';

const styles = {
  control: (styles, state) => {
    return {
      ...styles,
      width: state.selectProps.width,
      height: state.selectProps.height || '44px',
      minHeight: 'auto',
      borderColor: state.isFocused ? myExpensesPurple : 'rgba(0, 0, 0, 0.2)',
      color: black2,
      fontSize: '15px',
      boxShadow: 'none',
      cursor: 'pointer',
      caretColor: myExpensesPurple,
      '&:hover': {
        borderColor: myExpensesPurple
      }
    };
  },
  placeholder: styles => ({ ...styles, color: black3 }),
  clearIndicator: styles => {
    return {
      ...styles,
      color: black3,
      cursor: 'pointer',
      '&:hover': { color: black2 }
    };
  },
  option: (styles, state) => {
    const { isFocused, isSelected } = state;

    return {
      ...styles,
      backgroundColor: isSelected
        ? myExpensesPurple
        : isFocused
          ? '#DAD5E1'
          : '#fff',
      color: isSelected ? '#fff' : black2,
      fontSize: '15px',
      cursor: 'pointer'
    };
  },
  loadingIndicator: (styles, state) => {
    return {
      ...styles,
      '& span': {
        backgroundColor: myExpensesPurple
      }
    };
  },
  multiValue: styles => {
    return { ...styles, display: 'none' };
  }
};

export default styles;
