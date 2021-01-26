import React, { Component } from "react";
import Artist from "./ArtistSelection";
import "./Profile.css";
import axios from "axios";
import database from "./firebase";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: "",
      artist: [],
      submit: "",
      favoriteArtists: props.favoriteArtists,
    };
    this.newfavoriteArtist = "";
    this.editMode = this.editMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.similarArtists = this.similarArtists.bind(this);
    this.addArtist =this.addArtist.bind(this);
    this.removeArtist= this.removeArtist.bind(this);
  }

  editMode() {
    console.log("editing...");
    this.setState({
      editing: true,
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.similarArtists(this.state.value);
    console.log(this.state.value);
    var capitalized = this.state.value.charAt(0).toUpperCase() + this.state.value.slice(1)
    if (!(this.state.favoriteArtists.includes(capitalized))) {
    var new_list = [...this.state.favoriteArtists, capitalized];
    this.setState({ favoriteArtists: new_list });
    database.collection("People").doc(this.props.userid).update({favoriteArtists: new_list});

    }
  }

  similarArtists(x) {
    const apikey = "394887-smuv-V8P7SOQK";
    // const query = "q"
    const value = x;
    const url =
      "https://tastedive.com/api/similar?q=" +
      value +
      "&k=394887-smuv-V8P7SOQK";

    axios.get(url).then((response) => {
      // handle success
      console.log(response.data.Similar.Results);
      // this.setState({value: event.target.value})
      this.setState({ artist: response.data.Similar.Results });
    });
  }

  renderEdit() {
    return (
      <Artist
        similarArtists={this.state.artist}
        submit={this.state.submit}
        value={this.state.value}
        favoriteArtist={this.props.favoriteArtist}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        addArtist= {this.addArtist}
        removeArtist={this.removeArtist}
      />
    );
  }

  renderDefault() {
    return (
      <div>
        <button onClick={this.editMode}>Edit</button>
      </div>
    );
  }

    addArtist(artist) {
        if (!(this.state.favoriteArtists.includes(artist))) {
            var new_list = [...this.state.favoriteArtists, artist];
            this.setState({ favoriteArtists: new_list });
            database.collection("People").doc(this.props.userid).update({favoriteArtists: new_list});

        }
    }

    removeArtist(artist) {
        if (this.state.editing) {
        var new_list = this.state.favoriteArtists.filter((el, i)=>
        artist !== el
        )
        this.setState({ favoriteArtists: new_list });
        database.collection("People").doc(this.props.userid).update({favoriteArtists: new_list});

    }
        
    }
  
  render() {
    const { name, age, favoriteArtist, url } = this.props;
    return (
      <div className="profile">
        <div
          style={{ backgroundImage: `url(${url})` }}
          className="profileImage"
        >
          <h3>
            {name}, {age}
          </h3>
        </div>
        <div>
          favorite artist(s):
          <ul>
            {this.state.favoriteArtists.map((x) => (
              <li>
                <h3 onClick={() => this.removeArtist(x)}>{x}</h3>
              </li>
            ))}
          </ul>
          {this.state.editing ? this.renderEdit() : this.renderDefault()}
        </div>
      </div>
    );
  }
}

export default Profile;
