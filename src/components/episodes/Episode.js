import React, {useState, useEffect} from "react";
import {Container, Col, Row, Card, CardBody, CardLink} from "reactstrap";

const Episode = (props) => {

    console.log("Episode.js props.results", props.results);
    
    const [modal, setModal] = useState(false);

    const loadDetailsModal = () => {
        console.log("Episode.js loadDetailsModal", loadDetailsModal);
        setModal(!modal);
    };

    return (
        <React.Fragment>

            {props.results.length > 0 ? props.results.map((episode) => {
                        // console.log("Episode.js results.map episode", episode);
                    return (

                        <Card key={episode.id} className="m-2 p-2">
                        <CardBody>
                            <p><CardLink href={episode.url} onClick={loadDetailsModal}>{episode.name}</CardLink></p>
                            <p>Episode: {episode.episode}</p>
                            <p>Air Date: {episode.air_date}</p>
                            <p>Character(s): 
                            {/* {episode.characters.map((character, index) => {
                                console.log("Episode.js characters.map character", character);
                                return ({index})
                                })} */}
                                {/* {episode.charactersList} */}
                            </p>
                            <p><CardLink href={episode.charactersList} onClick={props.loadDetailsModal}>All Character(s):</CardLink></p>
                        </CardBody>
                        </Card>
                    )
                })
                    : null}

        </React.Fragment>
    );
};

export default Episode;
