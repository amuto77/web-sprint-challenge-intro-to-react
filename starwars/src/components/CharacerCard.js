import React from 'react';

function CharacterCard(props) {
    console.log(props);
    const {
       name,
       birth_year,
       gender,
       homeworld, 
       height,
       mass,
       hair_color,
       eye_color
    } = props.character;
    return (
        <h3>{name}</h3>
    <p>Birth Year: {birth_year}</p>
    <p>Gender: {gender}</p>
    <p>Homeworld: {homeworld}</p>
    <p>Height: {height}</p>
    <p>Mass: {mass}</p>
    <p>Hair Color: {hair_color}</p>
    <p>Eye Color: {eye_color}</p>
    );
}
export default CharacterCard;