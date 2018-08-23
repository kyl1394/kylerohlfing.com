import React, { Component } from 'react'
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} className="gallery-image" />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
      </div>
    )
  }
}

export default Gallery;
