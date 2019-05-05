
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Badge } from 'reactstrap';

class BadgeCount extends Component {  
  state = {
    animateBadge: false
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({ animateBadge: true });
    }
  }

  render() {
    const badgeClassName = classNames({
      'enter-active': this.state.animateBadge,
    });

    return <Badge className={badgeClassName} color="secondary">{this.props.count}</Badge>
  }
}

BadgeCount.propTypes = {
  count: PropTypes.number,
};

export default BadgeCount;