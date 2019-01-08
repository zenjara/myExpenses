import React, { Component } from 'react';
import Select, { components } from 'react-select';

import ArrowDownIcon from '../Icons/ArrowDownIcon';
import styles from './MeSelect.styles';

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <ArrowDownIcon size="16" />
      </components.DropdownIndicator>
    )
  );
};

class MeSelect extends Component {
  renderComponents() {
    const { components, customDropdownIndicator } = this.props;

    if (customDropdownIndicator) {
      return { ...components, DropdownIndicator };
    }

    return components;
  }

  render() {
    const { options, defaultValue, onChange } = this.props;

    return (
      <Select
        {...this.props}
        defaultValue={defaultValue}
        options={options}
        styles={styles}
        onChange={onChange}
        components={this.renderComponents()}
      />
    );
  }
}

export default MeSelect;
