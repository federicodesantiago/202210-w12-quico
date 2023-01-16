// import { useCallback, useReducer, useState } from 'react';
import { charactersDetails } from '../model/model';
// import { charactersReducer } from '../reducer/GOT.reducer';
import { CharacterType } from '../type/GOT.type';

export function useCharacters() {
    const initialState: Array<CharacterType> = [];

    // const [characters, dispatch] = useReducer(initialState, charactersReducer);

    const [characters, setCharacters] = useState(initialState);

    const handleLoad = useCallback(async () => {
        const characterList = charactersDetails;
        setCharacters(characterList);
    }, []);

    const handleUpdate = async function (character: Partial<CharacterType>) {
        setCharacters(
            characters.map((item) =>
                item.name === character.name ? { ...item, ...character } : item
            )
        );
    };

    return {
        characters,
        handleLoad,
        handleUpdate,
    };
}
