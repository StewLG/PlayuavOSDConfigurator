import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Parameters from '../parameters';
import Input from '../../components/Input';
import Column from '../../components/Column';
import CustomPropTypes from '../../utils/PropTypes';

export default class CallSign extends Component {
  static propTypes = {
    parameters: ImmutablePropTypes.contains({
      fontSize: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      numberOfPanels: PropTypes.number.isRequired,      
      positionX: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      positionY: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      hAlignment: CustomPropTypes.value(PropTypes.number.isRequired).isRequired, 
      //callSignText: CustomPropTypes.value(PropTypes.string.isRequired).isRequired, 
    }).isRequired,
    setFontSize: PropTypes.func.isRequired,
    setVisibleOn: PropTypes.func.isRequired,    
    setPosition: PropTypes.func.isRequired,
    setHAlignment: PropTypes.func.isRequired,   
    //setCallSignText: PropTypes.func.isRequired,   
  }

  shouldComponentUpdate(nextProps) {
    return !this.props.parameters.equals(nextProps.parameters);
  }

  render() {
    const { setFontSize, setPosition, setHAlignment,/* setCallSignText, */setVisibleOn } = this.props; 
    const {
      fontSize, numberOfPanels, positionX, positionY, hAlignment, /*callSignText,*/ visibleOn, 
    } = this.props.parameters;
    
    return (
      <Parameters.ParameterList name="call sign">
        <Parameters.Position labelX="position x" labelY="position y" name="callSign"
          positionX={positionX} positionY={positionY} setPosition={setPosition}
        />
        <Column width={50} >
          <Parameters.FontSize fontSize={fontSize} name="callSign" setFontSize={setFontSize} />
        </Column>
        <Column width={50} >
          <Parameters.HorizontalAlignment name="callSign"
            hAlignment={hAlignment} setHAlignment={setHAlignment}
          />
        </Column>
        

        
        <Parameters.VisibleOn visibleOn={visibleOn} name="callSign"
          setVisibleOn={setVisibleOn} numberOfPanels={numberOfPanels}
        />        
                     
      </Parameters.ParameterList>
    );
  }
}

        /*
        <Parameters.CallSignText  name="callSign"
          callSignText={callSignText} setCallSignText={setCallSignText}
        />   
        */