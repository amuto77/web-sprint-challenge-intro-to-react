// Write your Character component here
import React from 'react';
import CharacterCard from "./CharacterCard";

function Character(props) {
    return (
        <>
        {props.character.map((character) => {
            return <CharacterCard character={character} key={character.id} />
        })}
        </>
    );
}
export default Character;