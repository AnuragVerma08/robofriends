import React, { Component } from 'react';
import { robots } from './robots';
import CardList from './CardList'
import SearchBox from './SearchBox';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',

    }

  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
    console.log(event.target.value);
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="title">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} searchField={this.searchField} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;
