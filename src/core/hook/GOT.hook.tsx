// import { useCallback, useReducer, useState } from 'react';
import { useCallback, useReducer } from 'react';
import { charactersDetails } from '../model/model';
import {
    charactersLoadCreator,
    charactersUpdateCreator,
} from '../reducer/action.creators';
import { charactersReducer } from '../reducer/GOT.reducer';
// import { charactersReducer } from '../reducer/GOT.reducer';
import { CharacterType } from '../type/GOT.type';

export function useCharacters() {
    const initialState: Array<CharacterType> = charactersDetails;

    const [characters, dispatch] = useReducer(charactersReducer, initialState);

    // const [characters, setCharacters] = useState(initialState);

    const handleLoad = useCallback(async () => {
        dispatch(charactersLoadCreator(characters));
    }, [characters]);

    const handleUpdate = async function (character: Partial<CharacterType>) {
        dispatch(charactersUpdateCreator(characters));
    };

    return {
        characters,
        handleLoad,
        handleUpdate,
    };
}
