import {Component} from 'react'
import './index.css'

export default class AppItem extends Component {
  render() {
    const {eachObject, key} = this.props
    const {appName, imageUrl} = eachObject

    return (
      <li key={key} className="app-item-container">
        <img className="app-icon" alt={appName} src={imageUrl} />
        <p className="app-para">{appName}</p>
      </li>
    )
  }
}
