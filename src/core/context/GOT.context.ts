import { createContext } from 'react';
import { CharacterType } from '../type/GOT.type';

type AppContextType = {
    characters: Array<CharacterType>;
    handleLoad: () => Promise<void>;
    handleUpdate: (character: Partial<CharacterType>) => Promise<void>;
};

const initialContext: AppContextType = {
    characters: [],
    handleLoad: async () => {
        //
    },
    handleUpdate: async (character: Partial<CharacterType>) => {
        //
    },
};

export const AppContext = createContext(initialContext);
