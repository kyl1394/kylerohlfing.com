import React, { Component } from 'react'
import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar content-padding">
        <p>
          <strong>WEBSITE COMING SOON</strong>
        </p>
        <p className="visit-us">
          <strong>Visit us for awesome photos inspired by the magic of nature</strong>
        </p>
      </div>
    )
  }
}

export default Sidebar;
