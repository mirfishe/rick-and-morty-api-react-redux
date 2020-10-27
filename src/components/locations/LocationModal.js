import React, {useState, useEffect} from "react";
import {Container, Col, Row, Link, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

const LocationModal = (props) => {

    // console.log("Location.js props.results", props.results);
    
    return (
        <React.Fragment>

            {props.results.length > 0 ? props.results.map((location) => {
                        // console.log("Location.js results.map location", location);
                    return (

                        <Modal key={location.id} isOpen={props.modal} toggle={props.loadDetailsModal} >
                        <ModalHeader>{location.name}</ModalHeader>
                        <ModalBody>
                            <p><Link href={location.url} onClick={loadDetailsModal}>{location.name}</Link></p>
                            <p>Type: <Link href={location.type} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Location.js props.setDdSearchLocationType(location.type)", location.type); props.setDdSearchLocationType(location.type);}}>{location.type}</Link></p>
                            <p>Dimension: <Link href={location.dimension} onClick={(event) => {/*console.log(event.target.value);*/ event.preventDefault(); console.log("Location.js props.setDdSearchDimension(location.dimension)", location.dimension); props.setDdSearchDimension(location.dimension);}}>{location.dimension}</Link></p>
                            <p>Resident(s): 
                            {/* {location.residents.map((resident, index) => {
                                console.log("Location.js residents.map resident", resident);
                                return ({index})
                                })} */}
                                {/* {location.residentsList} */}
                            </p>
                            <p><Link href={location.residentsList} onClick={props.loadDetailsModal}>All Resident(s):</Link></p>
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

export default LocationModal;
