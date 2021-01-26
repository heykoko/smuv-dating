import "./App.css";
import React, { Component } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./Cards";
// import Spotify from "./Spotify"
import Chats from "./Chats";
import Chat from "./Chat";
import ChatScreen from "./ChatScreen";
import database from "./firebase";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "JejJpsFaUovPgCmniTZU",
      name: "",
      age: "",
      favoriteArtists: [],
      url: "",
      matches: []
    }
  }

  componentDidMount() {
    database
    .collection("People")
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        if (this.state.id == doc.id) {
          this.setState(doc.data());
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chats" />
              <ChatScreen />
            </Route>
            <Route path="/chats">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/profile">
            <Header />
            <h1> Your Profile</h1>
            <Profile 
            userid={this.state.id}
            name={this.state.name}
            age={this.state.age}
            favoriteArtists= {this.state.favoriteArtists}
            url={this.state.url}
            matches={this.state.matches}
            />
            </Route>
             <Route path="/">
              <Header />
              <Cards 
              user={this.state}
              />
            </Route> 
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
