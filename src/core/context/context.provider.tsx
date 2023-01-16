import { useCharacters } from '../hook/GOT.hook';
import { AppContext } from './GOT.context';

export function AppContextProvider({ children }: { children: JSX.Element }) {
    const { characters, handleLoad, handleUpdate } = useCharacters();

    const context = {
        characters: characters,
        handleLoad,
        handleUpdate,
    };

    return (
        <AppContext.Provider value={context}>{children}</AppContext.Provider>
    );
}
