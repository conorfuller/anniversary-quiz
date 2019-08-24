import React, { Component } from 'react'
import NavBar from './components/NavBar'
import QuestionList from "./components/QuestionList";
class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <QuestionList />
        </div>
    )
  }
}
export default App