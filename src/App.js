import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Container, Col, Row, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Jumbotron, TabContent, TabPane, Alert} from "reactstrap";

function App() {

  // const baseURL = "https://rickandmortyapi.com/api/";
  const charactersURL = "https://rickandmortyapi.com/api/character/";
  const locationsURL = "https://rickandmortyapi.com/api/location/";
  const episodesURL = "https://rickandmortyapi.com/api/episode/";
  const paginationURL = "?page="

  const [isOpen, setIsOpen] = useState(false);

  const [errBuildCharacterLookups, setErrBuildCharacterLookups] = useState("");
  const [errBuildLocationLookups, setErrBuildLocationLookups] = useState("");
  const [errBuildEpisodeLookups, setErrBuildEpisodeLookups] = useState("");

  // Build lookup arrays
  const [arrayCharacters, setArrayCharacters] = useState([]);
  const [arrayLocations, setArrayLocations] = useState([]);
  const [arrayEpisodes, setArrayEpisodes] = useState([]);

  const [arraySearchSpecies, setArraySearchSpecies] = useState([]);
  const [arraySearchCharacterTypes, setArraySearchCharacterTypes] = useState([]);
  const [arraySearchLocationTypes, setArraySearchLocationTypes] = useState([]);
  const [arraySearchDimensions, setArraySearchDimensions] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const loadCharacterLookupArrays = () => {

    // Build lookup arrays
    let arrCharacters = [];

    let arrSearchSpecies = [];
    let arrSearchCharacterTypes = [];
  

    // Create characters URL of all possible character IDs?
    // Fetch that and read results
    // current total number of characters + to get the correct index value(?)
    // used a number higher than the current total number of characters and it worked

    let lastPageOfCharacterResults;
    let totalNumberOfCharacters; // = 700 + 1; // Just over the hishest character id on 09/04/2020
    let charactersIDList = "";

    fetch(charactersURL)
    .then(result => {
        // console.log(result);
        return result.json();
    })
    .then(jsonData => {
      // console.log(jsonData);
      // Assumes that the highest character id = record count
      // totalNumberOfCharacters = jsonData.info.count; // + 1; to account for the index of the array starting at zero -- Not needed
      // console.log("totalNumberOfCharacters", totalNumberOfCharacters);
      lastPageOfCharacterResults = charactersURL + paginationURL + jsonData.info.pages;
      // console.log("lastPageOfCharacterResults", lastPageOfCharacterResults);

      return fetch(lastPageOfCharacterResults);
    })
    .then(result => {
        // console.log(result);
        return result.json();
    })
    .then(jsonData => {
      // console.log(jsonData);
      let results = jsonData.results;
      // console.log(results);

      // console.log("results.length", results.length);
      totalNumberOfCharacters = results[results.length - 1].id;
      // console.log("totalNumberOfCharacters", totalNumberOfCharacters);

      for (let i = 1; i < totalNumberOfCharacters; i++) {
        charactersIDList += i;
          if (i < totalNumberOfCharacters - 1) {
            charactersIDList += ",";
          };
      };
      
      // console.log("charactersIDList", charactersIDList);
      // console.log("charactersURL", charactersURL + charactersIDList);

      // From https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/
      return fetch(charactersURL + charactersIDList);
    })
    .then(result => {
        // console.log(result);
        return result.json();
    })
    .then(jsonData => {
      // console.log(jsonData);
      let results = jsonData;
      
      // Build lookup arrays
      // https://truetocode.com/check-for-duplicates-in-array-of-javascript-objects/
      for (let i = 0; i < results.length; i++) {
        let arrIDs =  arrCharacters.map((value)=>{return value.id;});
        if (arrIDs.indexOf(results[i].id) === -1) {
          arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
        };
        // a.findIndex(t=>(t.place === v.place && t.name===v.name))===i) // https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
        // seen.hasOwnProperty(currentObject.name) // https://stackoverflow.com/questions/30735465/how-can-i-check-if-the-array-of-objects-have-duplicate-property-values
        //if (!arrCharacters.hasOwnProperty(results[i].id)) { // How's this work with an object?
        // if statement isn't working correcly
        //  arrCharacters.push({id: results[i].id, name: results[i].name, url: results[i].url});
        // };

        // https://www.geeksforgeeks.org/how-to-remove-duplicates-from-an-array-of-objects-using-javascript/
        // copiedarrCharacters = [...arrCharacters];
        // arrCharacters = copiedarrCharacters.filter(function(item, index){
        //   return copiedarrCharacters.indexOf(item) >= index;
        // });

        // https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
        // let copiedarrCharacters = Array.from(new Set(id.map(a => a.id))).map(id => { return id.find(a => a.id === id) });
        // console.log(copiedarrCharacters);

        if (results[i].species !== "") {
          if (arrSearchSpecies.indexOf(results[i].species) === -1) {
            arrSearchSpecies.push(results[i].species);
          };
        };
        if (results[i].type !== "") {
          if (arrSearchCharacterTypes.indexOf(results[i].type) === -1) {
            arrSearchCharacterTypes.push(results[i].type);
          };
        };
    };

      // Sort the array
      arrSearchSpecies.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        };
      });

      // Sort the array
      arrSearchCharacterTypes.sort((a, b) => {
        if (a > b) {
            return 1;
        } else {
            return -1;
        };
      });

      // View lookup arrays
      // console.log("App.js loadAllLookupArrays arrCharacters", arrCharacters);
      // console.log("App.js loadAllLookupArrays arrSearchSpecies", arrSearchSpecies);
      // console.log("App.js loadAllLookupArrays arrSearchCharacterTypes", arrSearchCharacterTypes);

    })
    .catch(err => {
      console.log("App.js loadAllLookupArrays Character Lookups err", err);
      setErrBuildCharacterLookups(err);
    });


    setArrayCharacters(arrCharacters);
  
    setArraySearchSpecies(arrSearchSpecies);
    setArraySearchCharacterTypes(arrSearchCharacterTypes);

  };

  useEffect(() => {
    loadCharacterLookupArrays();
  }, []);

  useEffect(() => {
    console.log("App.js useEffect arrayCharacters", arrayCharacters);
  }, [arrayCharacters]);

  useEffect(() => {
    console.log("App.js useEffect arrayLocations", arrayLocations);
  }, [arrayLocations]);

  useEffect(() => {
    console.log("App.js useEffect arrayEpisodes", arrayEpisodes);
  }, [arrayEpisodes]);
  
  useEffect(() => {
    console.log("App.js useEffect arraySearchSpecies", arraySearchSpecies);
  }, [arraySearchSpecies]);
  
  useEffect(() => {
    console.log("App.js useEffect arraySearchCharacterTypes", arraySearchCharacterTypes);
  }, [arraySearchCharacterTypes]);
  
  useEffect(() => {
    console.log("App.js useEffect arraySearchLocationTypes", arraySearchLocationTypes);
  }, [arraySearchLocationTypes]);
  
  useEffect(() => {
    console.log("App.js useEffect arraySearchDimensions", arraySearchDimensions);
  }, [arraySearchDimensions]);


  return (
    <React.Fragment>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="#">Rick and Morty</NavbarBrand>
      <NavbarToggler onClick={toggleMenu} />
      <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="https://rickandmortyapi.com" target="_blank">Rick and Morty API</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://rickandmortyapi.com/documentation" target="_blank">Rick and Morty API Documentation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://mirfishe.github.io/Rick-and-Morty-API/" target="_blank">Rick and Morty Version 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://mirfishe.github.io/rick-and-morty-api-react/" target="_blank">Rick and Morty Version 2</NavLink>
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

    <Jumbotron>
        <h1 className="display-3">Rick and Morty</h1>
    </Jumbotron>

    {errBuildCharacterLookups !== "" ? <Alert color="danger">{errBuildCharacterLookups}</Alert> : null}
    {errBuildLocationLookups !== "" ? <Alert color="danger">{errBuildLocationLookups}</Alert> : null}
    {errBuildEpisodeLookups !== "" ? <Alert color="danger">{errBuildEpisodeLookups}</Alert> : null}

    </React.Fragment>
  );
}

export default App;
