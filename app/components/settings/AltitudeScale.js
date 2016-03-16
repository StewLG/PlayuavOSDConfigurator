import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Parameters from '../Parameters';
import { bindStateForComponent } from '../../utils/parameters';
import Column from '../Column';

class AltitudeScale extends Component {
  static propTypes = {
    numberOfPanels: PropTypes.number.isRequired,
    parameters: ImmutablePropTypes.contains({
      positionX: PropTypes.number.isRequired,
      positionY: PropTypes.number.isRequired,
      scaleAlignment: PropTypes.number.isRequired,
      scaleType: PropTypes.number.isRequired,
      visibleOn: PropTypes.number.isRequired,
    }).isRequired,
    setPosition: PropTypes.func.isRequired,
    setScaleAlignment: PropTypes.func.isRequired,
    setScaleType: PropTypes.func.isRequired,
    setVisibleOn: PropTypes.func.isRequired,
  }

  render() {
    const { setPosition, setScaleAlignment, setScaleType, setVisibleOn, numberOfPanels } = this.props;
    const { positionX, positionY, scaleAlignment, scaleType, visibleOn } = this.props.parameters;

    return (
      <Parameters.ParameterList name="altitude scale">
        <Column width={50} style={{ 'paddingRight': '5px' }}>
          <Parameters.AltitudeScaleType setScaleType={setScaleType} scaleType={scaleType} />
        </Column>
        <Column width={50} style={{ 'paddingLeft': '5px' }}>
          <Parameters.ScaleAlignment setScaleAlignment={setScaleAlignment} scaleAlignment={scaleAlignment} />
        </Column>
        <Parameters.Position labelX="position x" labelY="offset y" positionX={positionX} positionY={positionY} setPosition={setPosition} />
        <Parameters.VisibleOn visibleOn={visibleOn} setVisibleOn={setVisibleOn} numberOfPanels={numberOfPanels} />
      </Parameters.ParameterList>
    );
  }
}

export default bindStateForComponent('altitudeScale', AltitudeScale);