import { PropTypes } from 'react';
import StringPreview from './StringPreview';

export default class CallSign extends StringPreview {
  static propTypes = {
    ...StringPreview.propTypes,
    alarm: PropTypes.number.isRequired,
  }

  content() {
    /*
    switch (this.props.alarm) {
      case 1:
        return 'NO GPS FIX';
      case 2:
        return 'LOW BATTERY';
      case 3:
        return 'SPEED LOW';
      case 4:
        return 'OVER SPEED';
      case 5:
        return 'LOW ALT';
      case 6:
        return 'HIGH ALT';
      default:
        return null;
    }
    */
    // This should use on-screen preview value eventually
    return 'CALL SIGN GOES HERE';
  }
}
