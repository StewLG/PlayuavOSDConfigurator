import React, { Component, PropTypes } from 'react';
import Input from '../../components/Input';
import Column from '../../components/Column';
import Select from '../parameters/Select';
import SimpleSettings from './SimpleSettings';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CustomPropTypes from '../../utils/PropTypes';

// New: Derived from LinkQuality
export default class CallSign extends Component {
  static propTypes = {
    parameters: ImmutablePropTypes.contains({
      fontSize: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      numberOfPanels: PropTypes.number.isRequired,    
      positionX: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      positionY: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      hAlignment: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,
      visibleOn: CustomPropTypes.value(PropTypes.number.isRequired).isRequired,      
      callSignText: CustomPropTypes.value(PropTypes.string.isRequired).isRequired,                 
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
  
  _setCallSignText = (callSignText) => {
    // This may not be the right setter, but I don't think I'm even getting here
    this.props.setRaw('callSign', callSignText);
  }  
  

  render() {
    const { callSignText } = this.props.parameters;
    
    return (
      <SimpleSettings label="call sign" name="callSign" {...this.props}>
           
        <Column width={100} >
          <Input type="string" 
            label="Call Sign Text" value={callSignText} onChange={this._setCallSignText}
          />
        </Column>
        

      </SimpleSettings>
     );
  }
}









