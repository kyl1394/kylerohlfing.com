import React, { Component } from 'react'
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  renderImage(imageUrl) {
    return (
      <div className="item" key={imageUrl}>
        <img src={imageUrl} className="gallery-image" />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="gallery-header">
           SMALL WILDERNESS is a media brand bringing the best content to inspire and motivate self-empowered individuals to pursue their passions when it comes to wildlife and nature.
           It is my goal to share beautiful images and show even the most remote places can be home to some amazing wildlife.
           All photos were taken by myself: Kyle Rohlfing, and are for sale in prints, posters, and more.
        </div>

        <div className="photo-gallery">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    )
  }
}

export default Gallery;
