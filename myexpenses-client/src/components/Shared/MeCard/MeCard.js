import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './MeCard.styles';

const MeCard = props => {
  const { classes, title, children } = props;

  return (
    <div className={classes.meCardWrapper}>
      <div className={classes.meCardTitleWrapper}>
        {title ? <div className={classes.meCardTitle}>{title}</div> : null}
      </div>
      {title ? <hr className={classes.meCardSeparator} /> : null}
      <div className={classes.meCardContent}>{children}</div>
    </div>
  );
};

MeCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default injectSheet(styles)(MeCard);
