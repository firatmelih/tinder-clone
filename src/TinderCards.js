
import "./TinderCards.css";
import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg'
        },
        {
            name: 'Melih Fırat',
            url: 'https://avatars.githubusercontent.com/u/62102377?s=460&u=07b1c30f0f5df98b366b5a6e9848304947664cae&v=4'
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        //  setLastDirection(direction);

    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={people.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div stlye={{ backgroundImage: "url(" + person.url + ")" }}
                            className="card"
                        >
                            <img
                                className="card"
                                src={person.url}
                            ></img>
                            <h3>{person.name}</h3>

                        </div>

                    </TinderCard>



                ))}
            </div>
        </div >

    );
}

export default TinderCards
