import { Component } from 'react';
import './app.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello World!',
      users: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users: users }))
      .catch(err => console.error(err));
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter(u => u.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="app">
        <h1>{this.state.text}</h1>
        <button onClick={this.onChangeTextClick}>Change the title</button>
        <h3>** Dummy users **</h3>
        <SearchBox placeholder="Search users" handleSearchChange={this.onSearchFieldChange} />
        <CardList users={filteredUsers} />
      </div>
    );
  }

  onChangeTextClick = () => {
    this.setState({ text: 'You are awesome!' });
  }

  onSearchFieldChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
}

export default App;
