import React from 'react';
import PropTypes from 'prop-types';

const ArrowDownIcon = props => {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill={props.color}
          fillOpacity={props.opacity}
          fillRule="nonzero"
          d="M8.116 8.704L12 12.58l3.884-3.876a.997.997 0 1 1 1.41 1.41l-5.294 5.296-5.295-5.295a.998.998 0 0 1 1.41-1.41z"
        />
      </g>
    </svg>
  );
};

ArrowDownIcon.defaultProps = {
  size: '24',
  color: '#FFF',
  opacity: '0.5'
};

ArrowDownIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.string
};

export default ArrowDownIcon;
