// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    isFirstName: false,
    isLastName: false,
  }

  onClickFirst = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickLast = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="background">
        <h1 className="heading">Show/Hide</h1>
        <div className="sub-container">
          <div className="btn-container1">
            <button className="btn1" type="button" onClick={this.onClickFirst}>
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name1">Joe</p>}
          </div>
          <div className="btn-container2">
            <button className="btn2" type="button" onClick={this.onClickLast}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="name2">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
