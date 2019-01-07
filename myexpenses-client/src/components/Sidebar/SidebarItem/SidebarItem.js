import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './SidebarItem.styles';

function SidebarItemHOC(IconComponent) {
  class SidebarItem extends Component {
    renderSidebarLink() {
      const { classes, href, text, isHovered, isNavActive } = this.props;

      const navActive = isNavActive(href);

      return (
        <Link to={href} className={classes.sidebarItem}>
          <IconComponent isHovered={isHovered || navActive} />
          <span className={navActive ? classes.navActive : null}>{text}</span>
        </Link>
      );
    }

    renderSidebarItem() {
      const { classes, text, isHovered, onClick } = this.props;

      return (
        <div className={classes.sidebarItem} {...(onClick ? { onClick } : {})}>
          <IconComponent isHovered={isHovered} />
          <span>{text}</span>
        </div>
      );
    }

    render() {
      return this.props.isLink
        ? this.renderSidebarLink()
        : this.renderSidebarItem();
    }
  }

  SidebarItem.defaultProps = {
    isLink: true
  };

  SidebarItem.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    isHovered: PropTypes.bool,
    href: PropTypes.string,
    isNavActive: PropTypes.func,
    onClick: PropTypes.func
  };

  return injectSheet(styles)(SidebarItem);
}

export default SidebarItemHOC;
