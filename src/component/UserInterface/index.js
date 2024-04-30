import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class PasswordManger extends Component {
  state = {
    itemList: [],
    websiteInput: '',
    userName: '',
    passwordInput: '',
    searchInput: '',
    isChecked: '',
  }

  render() {
    const {
      itemList,
      websiteInput,
      userName,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state

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
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PasswordManger
