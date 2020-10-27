import React, {useState, useEffect} from "react";
import {Container, Col, Row, Card, CardBody, CardLink} from "reactstrap";

const Location = (props) => {

    console.log("Location.js props.results", props.results);
    
    const [modal, setModal] = useState(false);

    const loadDetailsModal = () => {
        console.log("Location.js loadDetailsModal", loadDetailsModal);
        setModal(!modal);
    };

    return (
        <React.Fragment>

            {props.results.length > 0 ? props.results.map((location) => {
                        // console.log("Location.js results.map location", location);
                    return (

                        <Card key={location.id} className="m-2 p-2">
                        <CardBody>
                            <p><CardLink href={location.url} onClick={loadDetailsModal}>{location.name}</CardLink></p>
                            <p>Type: <CardLink href={location.type} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Location.js props.setDdSearchLocationType(location.type)", location.type); props.setDdSearchLocationType(location.type);}}>{location.type}</CardLink></p>
                            <p>Dimension: <CardLink href={location.dimension} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Location.js props.setDdSearchDimension(location.dimension)", location.dimension); props.setDdSearchDimension(location.dimension);}}>{location.dimension}</CardLink></p>
                            <p>Resident(s): 
                            {/* {location.residents.map((resident, index) => {
                                console.log("Location.js residents.map resident", resident);
                                return ({index})
                                })} */}
                                {/* {location.residentsList} */}
                            </p>
                            <p><CardLink href={location.residentsList} onClick={props.loadDetailsModal}>All Resident(s):</CardLink></p>
                        </CardBody>
                        </Card>
                    )
                })
                    : null}

            
        </React.Fragment>
    );
};

export default Location;
