import { useCallback, useState } from 'react';
import { charactersDetails } from '../model/model';
import { CharacterType } from '../type/GOT.type';

export function useCharacters() {
    const initialState: Array<CharacterType> = [];

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
