import React, {useState, useEffect} from "react";
import {Container, Col, Row, Card, CardBody, CardLink} from "reactstrap";

const Character = (props) => {

    console.log("Character.js props.results", props.results);
    
    const [modal, setModal] = useState(false);

    const loadDetailsModal = () => {
        console.log("Character.js loadDetailsModal", loadDetailsModal);
        setModal(!modal);
    };

    return (
        <React.Fragment>

            {props.results.length > 0 ? props.results.map((character) => {
                        // console.log("Character.js results.map character", character);
                    return (

                        <Card key={character.id} className="m-2 p-2">
                            <img src={character.image} alt={character.name} />
                        <CardBody>
                            <p><CardLink href={character.url} onClick={loadDetailsModal}>{character.name}</CardLink></p>
                            <p>Gender: <CardLink href={character.gender} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchGender(character.gender)", character.gender); props.setDdSearchGender(character.gender);}}>{character.gender}</CardLink></p>
                            <p>Species: <CardLink href={character.species} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchSpecies(character.species)", character.species); props.setDdSearchSpecies(character.species);}}>{character.species}</CardLink></p>
                            <p>Status: <CardLink href={character.status} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchStatus(character.status)", character.status); props.setDdSearchStatus(character.status);}}>{character.status}</CardLink></p>
                            <p>Type: <CardLink href={character.type} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchCharacterType(character.type)", character.type); props.setDdSearchCharacterType(character.type);}}>{character.type}</CardLink></p>
                            <p>Location: <CardLink href={character.location.url} onClick={props.loadDetailsModal}>{character.location.name}</CardLink></p>
                            <p>Origin: <CardLink href={character.origin.url} onClick={props.loadDetailsModal}>{character.origin.name}</CardLink></p>

                            <p>Episode(s): 
                            {/* {character.episode.map((episode, index) => {
                                console.log("Character.js episodes.map episode", episode);
                                return ({index})
                                })} */}
                                {/* {character.episodesList} */}
                            </p>
                            <p><CardLink href={character.episodesList} onClick={props.loadDetailsModal}>All Episode(s):</CardLink></p>
                        </CardBody>
                        </Card>
                    )
                })
                    : null}

        </React.Fragment>
    );
};

export default Character;
