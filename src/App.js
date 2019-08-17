import React, {Component} from 'react';
import {connect} from 'react-redux'
import { increaseAction, decreaseAction } from './redux/actions';
class App extends Component {
  constructor(props){
    super(props); 
    this.state = {num: 0, val : 0};  
  }

  onChange = (e) => {
    this.setState({val :e.target.value});
  }
  onIn = () => {
    this.props.dispatch(increaseAction(this.state.val));
  }

  onDe = () => {
    this.props.dispatch(decreaseAction(this.state.val));
  }
  render() {
    const {number} = this.props;
    return (
      <div>
      <div>{number}</div>
      <button onClick = {this.onIn}>+</button>
      <button onClick = {this.onDe}>-</button>
      <select value = {this.value} onChange ={this.onChange}>
        <option>Please select....</option>
        <option value = {1}>1</option>
        <option value ={2}>2</option>
        <option value = {3}>3</option>
      </select>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    number: state
  }
}


export default connect(mapStateToProps)(App);