import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoList from './TodoList.js'
import './App.css';

class App extends Component {
  render() {
    let { counter, hanlderIncrement, handlerDecrement} = this.props
    return (
      <div className="App">
        <h1>计数</h1>
        <p>{counter}</p>
        <button onClick={hanlderIncrement}>加</button>
        <button onClick={handlerDecrement}>减</button>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hanlderIncrement: ()=> {
      dispatch({type: 'INCREMENT'})
    },
    handlerDecrement: ()=> {
      dispatch({type: 'DECREMENT'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
