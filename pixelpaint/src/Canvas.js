import React, { Component } from 'react';
import './Canvas.css';

var mouseDown = 0;

document.body.onmousedown = function() {
  ++mouseDown;
}

document.body.onmouseup = function() {
  --mouseDown;
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    var clickedStyle = {
      background: this.state.value
    }
    return (
      <button
        className="square"
        onMouseEnter={() => {
          if (mouseDown) {
            this.setState({value: 'black'})
          }
        }}
        onMouseDown={() => {
          if (mouseDown) {
            this.setState({value: 'black'})
          }
        }}
        style={clickedStyle}>
        </button>
    )
  }
}

class Canvas extends Component {
  paintSquare() {
    const pixels = this.state.pixels.slice();

    this.props.value = 'X';
  }

  render() {
    var pixels = Array(15).fill(Array(15).fill(null));
    var rowIndex = -1;

    return (
      <div>
        {
          pixels.map(function(row) {
            rowIndex++;
            var pixelIndex = 0;
            return (
              <div className="row" key={"row-" + rowIndex}>
                {
                  row.map(function(index) {
                    return <Square
                      key={ "pixel-" + rowIndex + ":" + pixelIndex++ }
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
