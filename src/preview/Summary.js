import React, { PropTypes } from 'react';
import * as Canvas_types from '../utils/Canvas';
import Canvas from '../utils/Canvas';
import PreviewBase from './PreviewBase';
import fonts from '../utils/fonts';

export default class Summary extends PreviewBase {
  static propTypes = {
    panel: PropTypes.number.isRequired,
    //positionX: PropTypes.number.isRequired,
    //positionY: PropTypes.number.isRequired,
    visibleOn: PropTypes.number.isRequired,
  }

  draw() {
    const font = fonts.getFont(0);
    this.canvas.clear();
    const width = this.refs.canvas.width;
    const height = this.refs.canvas.height;

    if ((this.props.visibleOn & Math.pow(2, this.props.panel)) !== 0) {

        // Draw rectangle that encloses whole summary panel        
        this.canvas.drawFilledRectangle(0, 0, width, height, true, false);
        this.canvas.drawRectangle(0, 0, width-1, height-1, true, true);

        //this.canvas.clearRect(0, 0, width, height);

        var debugLines = [ 
                            'Summary Value Line 1: ',
                            'Summary Value Line 2: ',
                            'Summary Value Line 3: '
                         ];    
        var currentLineXOffset = 5;                         
        var currentLineYOffset = 5;

        for (let debugLineIndex = 0; debugLineIndex < debugLines.length; debugLineIndex++) {
            // Get the current line
            var currentDebugLine = debugLines[debugLineIndex];
            // Draw the current line
            var debugLineStringPosition = Canvas.calculateStringPosition(currentDebugLine, currentLineXOffset, currentLineYOffset, Canvas_types.H_ALIGNMENT_LEFT, Canvas_types.V_ALIGNMENT_TOP, font);
            this.canvas.drawString(currentDebugLine, currentLineXOffset, currentLineYOffset, font); 
            // Move Y position down one line
            currentLineYOffset += debugLineStringPosition.height;
        }
    }
  }

  render() {
    //const { positionX, positionY } = this.props;
    // Position is hard-coded, as it is in the firmware. (TODO: Remove configurable position)
    const positionX = 80;
    const positionY = 40;
    const width = 200;    
    const height = 190;

    const visible = (this.props.visibleOn & Math.pow(2, this.props.panel)) !== 0;

    return (
      !visible ?
        <canvas ref="canvas" /> :
        <canvas
          ref="canvas"
          style={{ left: positionX, top: positionY }}
          width={width}
          height={height}
          className="preview-widget"
        />
    );
  }
}
