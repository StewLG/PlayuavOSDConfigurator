import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Parameters from '../../components/parameters';
import Column from '../../components/Column';

import { bindStateForComponent } from '../../utils/parameters';

class ArtificialHorizont extends Component {
  static propTypes = {
    parameters: ImmutablePropTypes.contains({
      positionX: PropTypes.number.isRequired,
      positionY: PropTypes.number.isRequired,
      scale: PropTypes.number.isRequired,
      type: PropTypes.number.isRequired,
      visibleOn: PropTypes.number.isRequired,
    }).isRequired,
    numberOfPanels: PropTypes.number.isRequired,
    setPosition: PropTypes.func.isRequired,
    setScale: PropTypes.func.isRequired,
    setType: PropTypes.func.isRequired,
    setVisibleOn: PropTypes.func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    return !this.props.parameters.equals(nextProps.parameters) ||
      this.props.numberOfPanels !== (nextProps.numberOfPanels);
  }

  render() {
    const {
      numberOfPanels,
      setPosition,
      setScale,
      setVisibleOn,
    } = this.props;
    const {
      positionX,
      positionY,
      scale,
      type,
      visibleOn,
    } = this.props.parameters;

    const typeOptions = [{ value: 0, label: 'mission planner' }, { value: 1, label: 'simple ' }];

    return (
      <Parameters.ParameterList name="artifical horizont">
        <Parameters.Position labelX="position x" labelY="position y"
          positionX={positionX} positionY={positionY} setPosition={setPosition}
        />
        <Column width={50}>
          <Parameters.Scale setScale={setScale} scale={scale} />
        </Column>
        <Column width={50}>
          <Parameters.Select label="type" setValue={this.props.setType}
            options={typeOptions} value={type}
          />
        </Column>
        <Parameters.VisibleOn visibleOn={visibleOn}
          setVisibleOn={setVisibleOn} numberOfPanels={numberOfPanels}
        />
      </Parameters.ParameterList>
    );
  }
}

export default bindStateForComponent('artificialHorizont', ArtificialHorizont);