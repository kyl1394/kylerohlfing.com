import React, {Component} from 'react';
import Square from './Canvas.js'

const colors = ["black", "white", "red", "green", "blue", "yellow", "orange", "pink", "brown", "purple"];

class Palette extends Component {
  render() {
    return (
      <div>
        {
          colors.map(function(color) {
            return (
              <Square />
            )
          })
        }
      </div>
    )
  }
}

export default Palette;
