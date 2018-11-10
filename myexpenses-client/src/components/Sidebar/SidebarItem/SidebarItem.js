import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './SidebarItem.styles';

function SidebarItemHOC(IconComponent) {
  class SidebarItem extends Component {
    render() {
      const { classes, href, text, isHovered, isNavActive } = this.props;

      const navActive = isNavActive(href);

      return (
        <Link to={href} className={classes.sidebarItem}>
          <IconComponent isHovered={isHovered || navActive} />
          <span className={navActive ? classes.navActive : null}>{text}</span>
        </Link>
      );
    }
  }

  SidebarItem.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    isHovered: PropTypes.bool,
    href: PropTypes.string,
    isNavActive: PropTypes.func
  };

  return injectSheet(styles)(SidebarItem);
}

export default SidebarItemHOC;
