import React, {useState, useEffect} from "react";
import {Container, Col, Row, Link, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

const EpisodeModal = (props) => {

    // console.log("Episode.js props.results", props.results);

    return (
        <React.Fragment>

            {props.results.length > 0 ? props.results.map((episode) => {
                        // console.log("Episode.js results.map episode", episode);
                    return (

                        <Modal key={episode.id} isOpen={props.modal} toggle={props.loadDetailsModal} >
                        <ModalHeader>{episode.name}</ModalHeader>
                        <ModalBody>
                            <p><Link href={episode.url} onClick={loadDetailsModal}>{episode.name}</Link></p>
                            <p>Episode: {episode.episode}</p>
                            <p>Air Date: {episode.air_date}</p>
                            <p>Character(s): 
                            {/* {episode.characters.map((character, index) => {
                                console.log("Episode.js characters.map character", character);
                                return ({index})
                                })} */}
                                {/* {episode.charactersList} */}
                            </p>
                            <p><Link href={episode.charactersList} onClick={props.loadDetailsModal}>All Character(s):</Link></p>
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

export default EpisodeModal;
