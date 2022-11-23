import {Component} from 'react'
import './index.css'

export default class TabItem extends Component {
  render() {
    const {eachObject, key, updateState, isClicked} = this.props
    const {displayText, tabId} = eachObject

    const classname = isClicked ? 'btn-styles' : ''
    console.log(isClicked)

    this.onUpdate = () => {
      updateState(tabId)
    }

    return (
      <li key={key}>
        <button
          onClick={this.onUpdate}
          className={`btn-style ${classname}`}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}
