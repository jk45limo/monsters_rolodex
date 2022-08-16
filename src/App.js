import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import './App.css';
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <SearchBox
            placeholder={'search monsters'}
            handlechange = {e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={this.state.monsters}/>
          
      </div>
    );
  }
}
export default App;
