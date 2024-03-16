import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Input from "./components/input";
import List from "./components/list";
import Modal from "./modal/modal";
import githubService from "./services/githubservice";

class App extends React.Component {
  state = {
    searchTerm: "",
    users: [],
    userDetails: null,
  };

  handleSearch = async (query) => {
    const users = await githubService.searchUsers(query);
    this.setState({ users });
  };

  handleUserClick = async (username) => {
    const userDetails = await githubService.getUserDetails(username);
    this.setState({ userDetails });
  };

  handleCloseModal = () => {
    this.setState({ userDetails: null });
  };

  render() {
    const { users, userDetails } = this.state;
    return (
      <Provider store={store}>
        <div id="root" className="input-container">
          <div>
            <Input className="input-field" onSearch={this.handleSearch} />
            <List users={users} onUserClick={this.handleUserClick} />
            {userDetails && (
              <Modal user={userDetails} onClose={this.handleCloseModal} />
            )}
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
