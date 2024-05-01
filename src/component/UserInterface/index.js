import {Component} from 'react'

import './index.css'

class PasswordManger extends Component {
    
  render() {
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app-logo"
          className="logo-image"
        />

        <div className="top-container">
          <form
            className="add-password-container"
            onSubmit={this.onAddpasswordList}
          >
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-log"
              />
              <input
                type="text"
                value={websiteInput}
                placeholder="Enter Website"
                className="input-item"
                onChange={this.onChangeWebsite}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PasswordManger
