import React, {useState, useEffect} from "react";
import {Container, Col, Row, Link, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

const CharacterModal = (props) => {

    // console.log("Character.js props.results", props.results);

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    return (
        <React.Fragment>

            {props.results.length > 0 ? props.results.map((character) => {
                        // console.log("Character.js results.map character", character);
                    return (

                        <Modal key={character.id} isOpen={props.modal} toggle={props.loadDetailsModal} >
                        <ModalHeader>{character.name}</ModalHeader>
                            <img src={character.image} alt={character.name} />
                        <ModalBody>
                            <p><Link href={character.url} onClick={loadDetailsModal}>{character.name}</Link></p>
                            <p>Gender: <Link href={character.gender} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchGender(character.gender)", character.gender); props.setDdSearchGender(character.gender);}}>{character.gender}</Link></p>
                            <p>Species: <Link href={character.species} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchSpecies(character.species)", character.species); props.setDdSearchSpecies(character.species);}}>{character.species}</Link></p>
                            <p>Status: <Link href={character.status} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchStatus(character.status)", character.status); props.setDdSearchStatus(character.status);}}>{character.status}</Link></p>
                            <p>Type: <Link href={character.type} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Character.js props.setDdSearchCharacterType(character.type)", character.type); props.setDdSearchCharacterType(character.type);}}>{character.type}</Link></p>
                            <p>Location: <Link href={character.character.url} onClick={props.loadDetailsModal}>{character.character.name}</Link></p>
                            <p>Origin: <Link href={character.origin.url} onClick={props.loadDetailsModal}>{character.origin.name}</Link></p>

                            <p>Episode(s): 
                            {/* {character.episode.map((episode, index) => {
                                console.log("Character.js episodes.map episode", episode);
                                return ({index})
                                })} */}
                                {/* {character.episodesList} */}
                            </p>
                            <p><Link href={character.episodesList} onClick={props.loadDetailsModal}>All Episode(s):</Link></p>
                        </ModalBody>
                        <ModalFooter>
                        <Button outline color="secondary" onClick={toggle}>Close</Button>
                        </ModalFooter>
                        </Modal>
                    )
                })
                    : null}

        </React.Fragment>
    );
};

export default CharacterModal;
