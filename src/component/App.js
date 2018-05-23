import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
const initialState=[
  {
    text:'React ES6 TodoMVC',
    completed:false,
    id:0
  }
]
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todos:initialState,
      gameID:null,
      player:0
    }
  }
  render() {
  return (
    <div>
      <Header onSave={this.onSave.bind(this)}/>
      <MainSection todos={this.state.todos}/>
    </div>
  );
  }
  onSave(text) {
    const todos = [
      {
      id: this.state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId
      ), -1) + 1,
      completed: false,
      text: text
      },
      ...this.state.todos
      ]
      this.setState({todos})
  }
  //console.log(text);
  
}
export default App;
