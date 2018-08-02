import React, { Component } from 'react';
import './Canvas.css';

var mouseDown = 0;

document.body.onmousedown = function() {
  ++mouseDown;
}

document.body.onmouseup = function() {
  --mouseDown;
}

function Square(props) {
  // onMouseEnter={props.onEnter()}
  // style={clickedStyle}
  return (
    <button
      className="square"
      onMouseDown={props.onClick}>
      </button>
  )
}

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        pixels: Array(15).fill(Array(15).fill(null))
      }],
      stepNumber: 0
    }
  }

  paintSquare(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const pixels = current.pixels.slice();

    if (mouseDown) {
      pixels[i] = 'black'
    }

    this.setState({
      history: history.concat([{
        pixels: pixels
      }]),
      stepNumber: history.length
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    var rowIndex = -1;

    return (
      <div>
        {
          history[this.state.stepNumber].pixels.map(function(row) {
            rowIndex++;
            var pixelIndex = 0;
            return (
              <div className="row" key={"row-" + rowIndex}>
                {
                  row.map(function(index) {
                    return <Square
                      key={ "pixel-" + rowIndex + ":" + pixelIndex++ }
                      onClick={(i) => this.paintSquare(i)}
                    />;
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Canvas;
