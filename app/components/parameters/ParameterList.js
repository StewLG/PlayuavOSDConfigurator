import React, { Component, PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

export default class ParamterList extends Component {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired
  }

  render() {
    const { children, name } = this.props;
    const contentStyle = { padding: 0 };
    return (
      <div className="parameter-list">
        <Card>
          <CardTitle title={name} />
          <CardText style={contentStyle}>
            {children}
          </CardText>
        </Card>
      </div>
     );
  }
}
