
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Badge } from 'reactstrap';
import { setTimeout } from 'timers';

class BadgeCount extends Component {  
  constructor(props) {
    super(props);

    this.duration = 4000;

    this.state = {
      animate: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.count !== this.props.count) {
      this.setState({ animate: true });
      setTimeout(() => this.setState({ animate: false }), this.duration + 1);
    }
  }

  render() {
    const badgeClassName = classNames({
      [this.props.className]: this.props.className,
      'enter-active': this.state.animate,
    });

    return <Badge className={badgeClassName} color="secondary">{this.props.count}</Badge>
  }
}

BadgeCount.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
};

export default BadgeCount;