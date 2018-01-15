import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class ToDoList extends Component {
   constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  render() {
    let {value } = this.state
    let { todolist=[],handlerAdd, handlerRemove } = this.props
    return (
      <div className="App">
        <h1>todolist</h1>
        <ul>
          {
            todolist.map((item, index) => {
              return <li key={index}>{item}  <button onClick={()=>handlerRemove(index)}>删除</button></li>
            })
          }
        </ul>
        <div><input type="text" value={value} onChange={(e)=> this.setState({value: e.target.value})} /><button onClick={()=> { handlerAdd(value); this.setState({value: ''})}}>添加</button></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todolist: state.todolist
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlerAdd: (value)=> {
      dispatch({type: 'ADDTODO', payload:{todo: value}})
      dispatch({type: 'INCREMENT'})
    },
    handlerRemove: (index)=> {
      dispatch({type: 'REMOVETODO', payload: {index}})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
