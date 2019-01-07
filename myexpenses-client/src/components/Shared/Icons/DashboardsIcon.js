import React from 'react';

const DashboardsIcon = props => {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16">
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <path
          fill="#FFF"
          fillOpacity={props.isHovered ? '1' : '.5'}
          fillRule="nonzero"
          d="M2 8.667h5.333V2H2v6.667zM2 14h5.333v-4H2v4zm6.667 0H14V7.333H8.667V14zm0-12v4H14V2H8.667z"
        />
      </g>
    </svg>
  );
};

export default DashboardsIcon;
