import { useState } from 'react';
import { charactersDetails } from '../model/model';
import { CharacterType } from '../type/GOT.type';

export function useCharacters() {
    const initialState: Array<CharacterType> = [charactersDetails];

    const [characters, setCharacters] = useState(initialState);

    const handleLoad = () => {
        setCharacters(characters);
    };

    const handleUpdate = function (character: Array<CharacterType>) {
        setCharacters(
            character.map((item) =>
                item.name === character[XX].name
                    ? { ...item, ...character }
                    : item
            )
        );
    };

    return {
        characters,
        handleLoad,
        handleUpdate,
    };
}
