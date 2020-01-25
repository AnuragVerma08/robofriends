import React, { Component } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import Loader from '../components/Loader';
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: '',

    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
    console.log(event.target.value);
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (!robots.length) ?
      <div>
        <Loader></Loader>
      </div>
      :
      <div className="tc">
        <h1 className="title">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} searchField={this.searchField} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>

  }
}

export default App;
