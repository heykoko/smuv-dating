import React, { Component, useEffect } from "react";
import axios from "axios";

class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", artist: "", submit: "" };
  }

  render() {

    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Add Favorite Artist:
            <input
              type="text"
              value={this.props.value}
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
        {this.props.similarArtists.map(x=> 
          <li onClick={() => this.props.addArtist(x.Name)}>{x.Name}</li>
          )}
        </ul>
      </div>
    );
  }

}


export default Artist;
