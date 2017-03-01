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
    }).isRequired,
    setFontSize: PropTypes.func.isRequired,
    setVisibleOn: PropTypes.func.isRequired,    
    setPosition: PropTypes.func.isRequired,
    setHAlignment: PropTypes.func.isRequired,    
  }

  shouldComponentUpdate(nextProps) {
    return !this.props.parameters.equals(nextProps.parameters);
  }

  // Climb Rate doesn't seem to need this
  /*
  _setEnabled(callSign) {
    return (enabled) => {
      this.props.setCallSignEnabled(alarm, parseInt(enabled, 10));
    };
  }

  _setValue(callSign) {
    return (value) => {
      this.props.setCallSignValue(alarm, parseInt(value, 10));
    };
  }
  */

  render() {
    const { setFontSize, setPosition, setHAlignment, setVisibleOn } = this.props; 
    const {
      fontSize, numberOfPanels, positionX, positionY, hAlignment, visibleOn, 
    } = this.props.parameters;
    /*
    const options = [
      { value: 0, label: 'disabled' }, { value: 1, label: 'enabled' }
    ];
    */
    
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
  if (eeprom_buffer.params.firmware_ver < 15) {
    eeprom_buffer.params.firmware_ver = 15;
    eeprom_buffer.params.Call_sign_enabled = 0;
    eeprom_buffer.params.Call_sign_panel = 2;
    eeprom_buffer.params.Call_sign_posX = 65;
    eeprom_buffer.params.Call_sign_posY = 70;    
    eeprom_buffer.params.Call_sign_align = 0;
    eeprom_buffer.params.Call_sign_fontsize = 1;
    sprintf(eeprom_buffer.params.Call_sign_text, "Call Sign Text");    
    bNeedUpdateFlash = true;
  }  
*/

