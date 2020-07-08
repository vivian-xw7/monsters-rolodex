import React, { Component } from 'react';
import CardList from "./components/card-list/CardList";
import './App.css';
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // React promises. The list is already provided by something else, and we fetch it in the URL.
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        {/* The e is the synthetic event, the target is where on the page it happened, the value is the string value. */}
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        {/* children are what's passed between a component */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
