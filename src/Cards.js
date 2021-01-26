import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./Cards.css";

function Cards(props) {
  const [people, setPeople] = useState([]);

  // Runs based on a condition
  useEffect(() => {
    database.collection("People").onSnapshot((snapshot) =>
      setPeople(
        snapshot.docs.map((doc) => {
          var new_person = doc.data();
          new_person.id = doc.id;
          return new_person;
        })
      )
    );
    // will run only ONCE
  }, []);
  console.log(props);

  const onSwipe = (direction) => {
    if (direction == "right") {
        console.log(props.user.matches)
        console.log(people[1].id)
        // var new_list = people[0].id
        // props.user.setState({ matches: new_list });
        // database.collection("People").doc(props.user.matches).update({matches: new_list});
    } else console.log("boo");
  };

  

  const artistMatch = (artists) => {
    var matchingArtists = artists.filter((el, i) => {
      for (let j = 0; j < props.user.favoriteArtists.length; j++) {
        if (el === props.user.favoriteArtists[j]) {
          return true;
        }
      }
      return false;
    });
    return (
      <div className="profileDetails">
        You Both Like:
        {matchingArtists.map((x) => (
          <p>{x} </p>
        ))}
      </div>
    );
  };

  return (
    <div>
      {people.map((person) => {
        if (person.id !== props.user.id) {
          return (
            <div className="cardContainer">
              <TinderCard
                onSwipe={onSwipe}
                className="swipe"
                key={person.id}
                preventSwipe={["up", "down"]}
              >
                <div
                  style={{ backgroundImage: `url(${person.url})` }}
                  className="card"
                >
                  <h3>
                    {person.name}, {person.age}
                  </h3>
                </div>
                <div className="profileDetails">
                  favorite artists:
                  <ul>
                    {person.favoriteArtists.map((x) => (
                      <li>{x}</li>
                    ))}
                  </ul>
                </div>
                <div>{artistMatch(person.favoriteArtists)}</div>
              </TinderCard>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Cards;
