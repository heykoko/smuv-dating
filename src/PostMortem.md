## Post Mortem 

## Approach and Process
What in my process and approach to this project would I do differently next time?
- I would research more thoroughly about my APIs and the authentication required. I faced a setback in this project when I realised I couldn't use the Spotify API that I had initially decided on because of oAuth.
- I would plan out better where certain states should be.

What in my process and approach to this project went well that I would repeat next time?
- Since I was new to React and had some trouble understanding the foundationans, it helped to take a step back and go through the exercises and documentation before proceeding further.


## Code and Code Design
What in my code and program design in the project would I do differently next time?
- I'm currently only using the TasteDive API would try to integrate multiple APIs into my App in order to get more information such as Album/ Artist cover images. 
- Smuv is also currently unable match two people who have swiped right on each other so that they can proceed to be in each other's "Chats" screen. Below is the code and it only console.logs at the moment. 
```
  const onSwipe = (direction) => {
    if (direction == "right") {
        var new_list = people[0].id
        props.user.setState({ matches: new_list });
        database.collection("People").doc(props.user.matches).update({matches: new_list});
        console.log("it's a match)
    } else console.log("not a match");
  };
```

What in my code and program design in the project went well? Is there anything I would do the same next time?
- I'm glad that I was able to easily integrate firebase into my app to store the information that the User edits of their profile.
```
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
```

## SEI Post Mortem
What habits did I use during this unit that helped me?
- Bouncing my ideas off my peers and the instructional team and not being afraid to reach out for help!

What habits did I have during this unit that I can improve on?
- I think I could improve on breaking my project down to simple problems to tackle. At the beginning of this project I was viewing it too much of a big picture and had difficulty finding a starting point.

How is the overall level of the course during this unit? (instruction, course materials, etc.)
- React was definitely challenging. It was hard initially to tie everthing we learned together and build an app from scratch. The intruction was slightly fast paced. However, after going through this project I got me more familiar with how to think in React.